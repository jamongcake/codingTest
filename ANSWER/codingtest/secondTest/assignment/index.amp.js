
// =========================== JSON 읽어오기 ==============================================================

var jsonPath = location.origin + "/items.json"; 
var jsonText = {};

/** 해당 경로의 json을 읽어오기 */
function readJSON(file, callback) {
    var targetFile = new XMLHttpRequest();
    targetFile.overrideMimeType("application/json");
    targetFile.open("GET", file, true);
    targetFile.onreadystatechange = function() {
        if (targetFile.readyState === 4 && targetFile.status == "200") {
            callback(targetFile.responseText);
        }
    }
    targetFile.send(null);
}


/** json 데이터를 html #id 영역에 입력하여 출력 */
function setBuildingInfo( info ){
    var buildingInfo = {
        name:"buildingName", address1:"address1", address2:"address2", 
        address3:"address3", floor:"floor", rooms:"rooms", established : "established"
    };
    var temp = info.datas[0].building;
    for( one in buildingInfo ) {
        console.log(temp[one]);
        document.getElementById(buildingInfo[one]).innerText = temp[one];
    }
    document.getElementById("buildingId").value = temp.id;
    document.getElementById("buildingFront").src = temp.img;
}

function startJson(){
    readJSON(jsonPath, function(text){
        jsonText = JSON.parse(text);
        setBuildingInfo( jsonText );
    });
}

// =========================================================================================

/** 페이지가 로딩되었을 때 시작함수 */
function init() {
    startJson();
}
init();




(function(){

    // =========================== 다음 지도 ==============================================================
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new daum.maps.LatLng(37.551354, 126.956126), //지도의 중심좌표.
        level: 2 //지도의 레벨(확대, 축소 정도)
    };
    var map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴
    var markerPosition = new daum.maps.LatLng(37.551354, 126.956126);
    var marker = new daum.maps.Marker({
        position:markerPosition
    });

    marker.setMap(map); // 마커 붙이기.

    var iwContent = '<div class="mapTag">고려 아카데미 텔</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new daum.maps.LatLng(33.450701, 126.570667); //인포윈도우 표시 위치입니다

    var infowindow = new daum.maps.InfoWindow({
        position : iwPosition, 
        content : iwContent 
    });
    
    infowindow.open(map, marker); // 마커 위에 인포윈도우를 표시합니다.

    // =========================== 사진 모달창 ==============================================================

    var imgs = document.getElementsByClassName('image');
    var modalImgs = document.getElementsByClassName('modalOff');

    /** 모달창을 부른다. */
    function modalCall(target) {
        var next = target.nextElementSibling;
        next.classList.add('modalOn');
    }

    /** 모달창을 끈다. */
    function modalOff(target) {
        target.parentElement.classList.remove('modalOn');
    }

    /** 이미지에 클릭 이벤트 추가  */
    function addImgModal() {
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].addEventListener('click', function (e) {
                modalCall(e.target);
            });
        }

        for (var i = 0; i < modalImgs.length; i++) {
            modalImgs[i].addEventListener('click', function (e) {
                modalOff(e.target);
            });
        }
    }

    // =========================== 이미지 슬라이더 ==============================================================

    var slider = document.getElementById('slider');
    var moveX = window.outerWidth + "px";
    var roomImg = document.getElementsByClassName('roomImg');
    var currentNo = 0;
    var nextNo = 1;
    var preNo = 2;

    /* 각각의 방이미지에 슬라이드를 위한 좌표를 설정해서 위치시킨다. */
    function sliderSetting() {
        for (var i = 0; i < roomImg.length; i++) {
            if (i === currentNo)
                roomImg[i].style.left = 0;
            else
                roomImg[i].style.left = "-" + moveX;
        }
    }

    /** 각 번호가 length이상 되었을때 리셋한다. */
    function resetNum(num) {
        return num >= roomImg.length ? 0 : num;
    }

    /** 슬라이드를 시작하기 전에 보이기 위해 이동할 순서를 정하고 zIndex를 통해 보여지는 것을 조정한다. */
    function changeSlide() {
        nextNo = resetNum(nextNo);
        currentNo = resetNum(currentNo);
        preNo = resetNum(preNo);
        roomImg[currentNo].style.zIndex = 999;
        roomImg[nextNo].style.zIndex = 999;
        roomImg[preNo].style.zIndex = 0;

        // setTimeout을 주지 않으면 zIndex가 적용되는 중에 시작되어 이미지가 섞여보일수 있다.
        setTimeout(startSlide, 500);
    }

    /** 슬라이드를 시작한다. */
    function startSlide() {
        roomImg[currentNo++].style.left = moveX;
        roomImg[nextNo++].style.left = 0 + "px";
        roomImg[preNo++].style.left = "-" + moveX;
    }

    // =========================== JSON 읽어오기 ==============================================================

    var jsonPath = location.origin + "/json/items.json"; 
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

    /** 다음 마커 태그 스타일 수정*/
    function mapTag(){
        var test = document.getElementsByClassName('mapTag')[0];
        test.parentElement.style.textAlign = "center";
        test.parentElement.style.width = "100%";
    }

    // =========================================================================================

    /**시작함수 */
    function init() {
        mapTag();
        startJson();
        addImgModal();
        sliderSetting();
        setInterval(changeSlide, 5000);
    }
    init();

})();



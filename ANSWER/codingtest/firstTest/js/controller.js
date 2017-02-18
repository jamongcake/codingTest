(function(){

    /** 초기 데이터 */
    var toDoLists = [
        {"number" : "0", "importance" : "1", "content" : "안녕하세요", "date":"2017/2/13", "complete": false, display:"block"},
        {"number" : "1", "importance" : "2", "content" : "반갑습니다", "date":"2017/2/14", "complete": false, display:"block"},
        {"number" : "2", "importance" : "3", "content" : "티몬 FE 코딩테스트 ", "date":"2017/2/15", "complete": false, display:"block"},
        {"number" : "3", "importance" : "3", "content" : "지원자 박철훈 입니다.", "date":"2017/2/16", "complete": false, display:"block"},
        {"number" : "4", "importance" : "2", "content" : "잘 부탁드립니다.", "date":"2017/2/16", "complete": false, display:"block"},
        {"number" : "5", "importance" : "3", "content" : "2줄 이상 테스트를 해보겠습니다. 2줄 이상 테스트를 해보겠습니다. 2줄 이상 테스트를 해보겠습니다. 2줄 이상 테스트를 해보겠습니다. 2줄 이상 테스트를 해보겠습니다. 2줄 이상 테스트를 해보겠습니다. 2줄 이상 테스트를 해보겠습니다. .", "date":"2017/2/16", "complete": false, display:"block"}
    ];

    /** 필터, 초기화면에서는 다 보이게 설정. */
    var filter = { importance : ["0"], complete:["all"] };

    var importanceText = ["없음", "보통", "중요", "매우 중요"];
    var moveHeight = 0;
    var addToDoList = document.getElementById('addToDoList');

    var buttonImportant = document.getElementsByClassName('buttonImportant');
    var buttonComplete = document.getElementsByClassName('buttonComplete');

    /** 중요도 필터 버튼을 클릭했을때 필터 기준을 조정한다. */
    function buttomImportantDisplay( e ) {

        var number = e.target.value;
        var index = filter.importance.indexOf(number);

        // 클릭했을때 클래스를 더해준다.
        if (e.target.className === "buttonImportant") {
            e.target.classList.add("red");
        } else {
            e.target.classList.remove("red");
        }

        if( number === "0" && index < 0 ) {
            var temp = e.target.nextElementSibling;
            while( temp ) {
                temp.classList.remove("red");
                temp = temp.nextElementSibling;
            }
            filter.importance = ["0"];

        } else {
            buttonImportant[0].classList.remove("red");
            if(filter.importance.indexOf("0") > -1) {
                filter.importance.splice(filter.importance.indexOf("0"),1);
            }
            if( index < 0 ) {
                filter.importance.push(number);
            } else {
                filter.importance.splice(index, 1);
            }
        }
        filterCheck();
    }

    /** 완료 여부 필터 버튼을 클릭했을때 필터 기준을 조정한다. */
    function buttomCompleteDisplay( e ) {
        var completed = e.target.value;
        var index = filter.complete.indexOf(completed);

        // 클릭했을때 클래스를 더해준다.
        if (e.target.className === "buttonComplete") {
            e.target.classList.add("red");
        } else {
            e.target.classList.remove("red");
        }

        if( completed === "all" && index < 0 ) {
            var temp = e.target.nextElementSibling;
            while( temp ) {
                temp.classList.remove("red");
                temp = temp.nextElementSibling;
            }
            filter.complete = ["all"];
        }else {
            buttonComplete[0].classList.remove("red");
            if(filter.complete.indexOf("all")> -1) {
                filter.complete.splice(filter.complete.indexOf("all"),1);
            }
            if( index < 0 ) {
                filter.complete.push(completed);
            } else {
                filter.complete.splice(index, 1);
            }
        }
        filterCheck();
    }

    /** 필터에 있는 값을 todoLists 값과 비교 체크한 다음 필터에 따라 화면 그리기 호출 */
    function filterCheck(){
        // filter에 있는거만 확인하면 된다.
        // display 초기화
        toDoLists.map( x=> {x.display = "block"});

        // important 체크
        var checkLine = filter.importance;
        if ( checkLine.indexOf("0") < 0 ) {
            toDoLists.map( x => { x.display = checkLine.indexOf(x.importance) < 0 ? "none" : "block" });
        }

        // complete 체크
        checkLine = filter.complete;
        if ( checkLine.indexOf("all") < 0 ) {
            //없으면 각각 체크 시작, 하지만 display :block인 것에 대해서만 체크해야 한다.
            toDoLists.map( x => {
                if( x.display === "block") {
                    x.display = checkLine.indexOf(String(x.complete)) < 0? "none" : "block";
                }
            });
        }

        // 필터체크가 완료되고  화면을 다시 그린다.
        makeList();
    }

    function filterButtonListener() {
        for( var i = 0; i < buttonImportant.length; i++ ) {
            buttonImportant[i].onclick = function(e){
                buttomImportantDisplay(e);
            };
        }
        for( var i = 0; i < buttonComplete.length; i++ ) {
            buttonComplete[i].onclick = function(e){
                buttomCompleteDisplay(e);
            };        
        }
    }

    /** toDoLists JSON 객체에 값추가 ( 중요도, 내용 ) */
    function addToDoLists( importance, content) {
        var temp = {
            "number" : toDoLists.length, "importance" : importance, 
            "content" : content, "date" : returnDate(), "complete" : false, "display" : "block"
        };
        toDoLists.push(temp);
    }

    function deleteToDoLists( index ) {
        toDoLists.splice( index, 1 );
    }

    function insertToDoList(index, content) {
        toDoLists.splice( index, 0, content );
    }

    /** 뷰단에 리스트 출력 */
    function makeList(){
        var listArea = document.getElementsByClassName('listArea')[0];

        listArea.innerHTML = "";
        for( var i = 0; i < toDoLists.length; i++) {
            listArea.innerHTML += createOneOfList(toDoLists[i].number, toDoLists[i].importance, toDoLists[i].complete,
                                                  toDoLists[i].content,toDoLists[i].date, toDoLists[i].display );
        }
        addEventListenerFunction();
        toDoContentModified();
    }

    /** 각 리스트 별로 HTML 코드 생성 ( 넘버, 중요도, 내용, 날짜, 디스플레이 ) */
    function createOneOfList( number, importance, complete, content, date, display) {
        return  '<div class="oneLine" style="display:'+display+'">'+
                    '<div class="oneCheckBox">'+
                        '<input type="checkbox" class="innerCheckBox"'+returnChecked(complete)+'>'+
                        '<input type="hidden" class="hiddenNumber" value='+ number + '>'+
                    '</div>'+
                    '<div class="order" >t</div>'+
                    '<div class="schedule">'+
                        '<div class="importantText">중요도 : '+ importanceText[importance] + '</div>'+
                        '<div class="createdDate">추가일 : '+date+ '</div>'+
                        '<div class="toDoContent" style="text-decoration:'+returnLinethrough(complete)+'">'+content+'</div>'+
                    '</div>'+
                '</div>';
    }

 

    function returnChecked(complete) {
        return complete? "checked" : "";
    }

    function returnLinethrough(complete) {
        return complete? "line-through" : "";
    }

    function returnDate() {
        var temp = new Date();
        return temp.getFullYear() + '/' + temp.getMonth() + '/' + temp.getDate();
    }

    /** 입력한 값 확인( 중요도, 내용 ) */
    function validation( importance, content ) {

        // 각 항목에 대한 체크 및 안내 때문에 여러 if문을 쓸수밖에 없었음.
        if( importance < 1 ) {
            alert("중요도를 선택해 주세요");
            return false;
        } else if( !content.length ) {
            alert("할 일을 입력해 주세요.");
            return false;
        } else if( content.indexOf("<script>") > -1 ) {
            alert("스크립트 코드는 입력할 수 없습니다."); 
            return false;
        }
        return true;
    }

    /** 할일 목록 추가 버튼 이벤트 핸들러  */
    function addButton() {
        addToDoList.onclick = function(){

            // 클릭했을 당시의 동적데이터를 가져와야 해서 핸들러 안에 변수 선언 및 값 가져옴.
            var toDoSomething = document.getElementById('toDoSomething').value;
            var toDoImportance = document.getElementById('toDoImportance').value;

            if( !validation( toDoImportance, toDoSomething) ) { return ; }
            addToDoLists( toDoImportance, toDoSomething);
            makeList();
        };
    }

    /** 마우스 왼쪽 버튼을 누르고 있을때 작동하는 함수 */
    function moveLine(e) {
        var offsetY = e.pageY - moveHeight
        if (e.target.parentNode.style == undefined) {
            // 클릭 이후 이동하면 그 이후 다시 클릭했을때 이벤트는 document가 되어버림
        }
        e.target.parentNode.style.top = offsetY + "px";
    }

    /** 마우스왼쪽 버튼을 떼었을때 마우스 무브 이벤트 리스너 제거 */
    function mouseup(e){
        window.removeEventListener('mousemove', moveLine);
        window.removeEventListener('mouseup', mouseup);
        e.target.parentNode.style.zIndex = 1;
    }

    /** 체크박스 클릭시 변화 함수 */
    function checkBoxFunction(target){
        var number = target.nextSibling.value;
        var oneLine = document.getElementsByClassName('oneLine')[number];
        oneLine.children[2].children[2].style.textDecoration = target.checked ? "line-through" : "";
        toDoLists[number].complete = target.checked;

        filterCheck();
    }

    /** 마우스 왼쪽 버튼 눌렀을때 이벤트 리스너 각각 등록 */
    function addEventListenerFunction(){
        var orders = document.getElementsByClassName('order');
        var innerCheckBox = document.getElementsByClassName('innerCheckBox');
        
        //순서 바꾸기
        for( var i = 0; i < orders.length; i++) {
            orders[i].addEventListener( 'mousedown', function(e){
                if( e.buttons === 1) {
                    moveHeight = e.pageY;
                    e.target.parentNode.style.zIndex = 999;
                    window.addEventListener( 'mousemove', moveLine);
                    window.addEventListener( 'mouseup', mouseup);
                }
            });
            innerCheckBox[i].addEventListener( 'click', function(e){
                    checkBoxFunction(e.target);
            });
        }
    }


    /** 각 리스트 별로 HTML 수정 코드 생성 (  중요도, 내용 ) */
    function modifiedOneOfList( importance,content) {
        return  '<div>'+returnSelectedCode( importance )+'</div>'+
                    '<div><textarea>'+content+'</textarea></div>';
    }

    /** selectBox 추가 코드 */
    function returnSelectedCode( num ) {
        var returnText = '<select><option value="0">중요도</option><option value="3">매우 중요</option><option value="2">중요</option><option value="1">보통</option></select>';
        var index = returnText.indexOf(num);
        return returnText.replace(returnText.substring(index, index+3), num+'" selected>')
    }

    /** 클릭시에 수정 HTML로 치환해 준다. */
    function modifiedSpace(e) {
        var number = e.target.parentNode.parentNode.children[0].children[1].value;
        var modifiedHtml = modifiedOneOfList(toDoLists[number].importance, toDoLists[number].content);
        e.target.parentNode.innerHTML = modifiedHtml;
    }

    /** 할일 목록 내용수정 하기위한 이벤트 리스너 추가 */
    function toDoContentModified(){
        var toDoContents = document.getElementsByClassName('schedule');
        for ( var i = 0 ; i < toDoContents.length; i++ ) {
            toDoContents[i].addEventListener('click', modifiedSpace );
        }
    }

    /** 맨처음 시작되는 함수 */
    function init(){
        makeList();
        addButton();
        filterButtonListener();
        toDoContentModified();
    }

    init();
})();
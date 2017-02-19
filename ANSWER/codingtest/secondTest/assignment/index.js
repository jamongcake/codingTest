// =========================== 다음 지도 ==============================================================
var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
    center: new daum.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
};
var map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴

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

/* 각각의 방이미지에 슬라이더를 붙인다. */
function sliderSetting() {
    for (var i = 0; i < roomImg.length; i++) {
        if (i === currentNo)
            roomImg[i].style.left = 0;
        else
            roomImg[i].style.left = "-" + moveX;
    }
}

/** 슬라이드를 시작하기 전에 각각의 No를 바꿔 순서를 정하고 zIndex를 통해 안보이게 한다. */
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

/** 각 번호가 length이상 되었을때 리셋한다. */
function resetNum(num) {
    return num >= roomImg.length ? 0 : num;
}

/** 페이지가 로딩되었을 때 시작함수 */
function init() {
    addImgModal();
    sliderSetting();
    setInterval(changeSlide, 5000);
}
init();




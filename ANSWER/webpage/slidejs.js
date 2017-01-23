/**
 * 이 코드는 한가지 버그가 있다.
 * 해당 페이지를 켜둔 상태로 다른 페이지를 할경우에는
 * 그림 보여주는 것이 누적되어서 나중에 해당 페이지로 왔을때
 * 그것들이 한꺼번에 작동해서 이미지가 매우 빠른속도로 전환된다.
 */

window.addEventListener('load', slideShow, false);

function slideShow() {
  
  /* GLOBALS 전역변수**********************************************************************************************/
  
  var globals = {
    slideDelay: 4000, // The time interval between consecutive slides.
    fadeDelay: 35, // The time interval between individual opacity changes. This should always be much smaller than slideDelay.  
    wrapperID: "slideShowImages", // The ID of the <div> element that contains all of the <img> elements to be shown as a slide show.
    buttonID: "slideShowButton", // The ID of the <button> element that toggles the slide show on and off.
    buttonStartText: "Start Slides", // Text used in the slide show toggle button.
    buttonStopText: "Stop Slides", // Text used in the slide show toggle button.    
    wrapperObject: null, // Will contain a reference to the <div> element that contains all of the <img> elements to be shown as a slide show.
    buttonObject: null, // If present, will contain a reference to the <button> element that toggles the slide show on and off. The initial assumption is that there is no such button element (hence the false value).
    slideImages: [], // Will contain all of the slide image objects.
    slideShowID: null, // A setInterval() ID value used to stop the slide show.
    slideShowRunning: true, // Used to record when the slide show is running and when it's not. The slide show is always initially running.    
    slideIndex: 0 // The index of the current slide image.
  }
  
  /* MAIN 메인 실행함수*************************************************************************************************/
  
  initializeGlobals();  
  
  if ( insufficientSlideShowMarkup() ) {
    return; // Insufficient slide show markup - exit now.
  }
 
   // Assert: there's at least one slide image.
 
  /** 하나의 이미지만 있을경우 슬라이드 쇼를 할필요 없으니 멈추고 return  */
  if (globals.slideImages.length == 1) {
    return; // The solo slide image is already being displayed - exit now.
  }
  
  // Assert: there's at least two slide images.
  
  initializeSlideShowMarkup();
  
  globals.wrapperObject.addEventListener('click', toggleSlideShow, false); // If the user clicks a slide show image, it toggles the slide show on and off.
  
  if (globals.buttonObject) {
    globals.buttonObject.addEventListener('click', toggleSlideShow, false); // This callback is used to toggle the slide show on and off.
  } 
  
  startSlideShow();
  
  /* FUNCTIONS ********************************************************************************************/
  

  /** wrapper, button 객체를 확인하고 이미지들이 있는지를 확인해서 없으면 null  */
  function initializeGlobals() {   
    globals.wrapperObject = (document.getElementById(globals.wrapperID) ? 
                                document.getElementById(globals.wrapperID) : null);
    globals.buttonObject = (document.getElementById(globals.buttonID) ? 
                                document.getElementById(globals.buttonID) : null);   
    
    if (globals.wrapperObject) {
      globals.slideImages = (globals.wrapperObject.querySelectorAll('img') ? 
                                globals.wrapperObject.querySelectorAll('img') : []);
    }
  } // initializeGlobals
  
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  /** wrapper, slideImages 유무를 확인한다음 없으면 wrapper, button을 display none 한다. */
  function insufficientSlideShowMarkup() {
    if (!globals.wrapperObject) { // There is no wrapper element whose ID is globals.wrapperID - fatal error.
      if (globals.buttonObject) {
        globals.buttonObject.style.display = "none"; // Hide the not needed slide show button element when present.
      }
      return true;
    }

    if (!globals.slideImages.length) { // There needs to be at least one slide <img> element - fatal error.
      if (globals.wrapperObject) {
        globals.wrapperObject.style.display = "none"; // Hide the not needed <div> wrapper element.
      }
    
      if (globals.buttonObject) {
        globals.buttonObject.style.display = "none"; // Hide the not needed slide show button element.
      }
    
      return true;
    }
    
    return false; // The markup expected by this library seems to be present.
  } // insufficientSlideShowMarkup
  
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  /** slideWidth,height, slideImages,wrapperObject.style buttonObject 설정*/
  function initializeSlideShowMarkup() {  
    var slideWidthMax = maxSlideWidth(); // Returns a value that is always in pixel units.
    var slideHeightMax = maxSlideHeight(); // Returns a value that is always in pixel units.
    
    // wrapperObject position, overflow, width, height 설정 
    globals.wrapperObject.style.position = "relative";
    globals.wrapperObject.style.overflow = "hidden"; // This is just a safety thing.
    globals.wrapperObject.style.width = slideWidthMax + "px";
    globals.wrapperObject.style.height = slideHeightMax + "px";
    

    // slideCount 갯수에 따라 반복문을 돌면서 opacity, position, top, left 설정 
    var slideCount = globals.slideImages.length;

    // getBoundingClientRect : bottom, height, left,right, top, width를 반환한다. ie9부터 잘 작동
    for (var i = 0; i < slideCount; i++) { 
      globals.slideImages[i].style.opacity = 0;
      globals.slideImages[i].style.position = "absolute";
      globals.slideImages[i].style.top = 
        (slideHeightMax - globals.slideImages[i].getBoundingClientRect().height) / 2 + "px";   
      globals.slideImages[i].style.left = 
        (slideWidthMax - globals.slideImages[i].getBoundingClientRect().width) / 2 + "px";               
    }
    
    // 슬라이드 첫 이미지를 보이게 설정 
    globals.slideImages[0].style.opacity = 1; // Make the first slide visible.

    // 버튼 객체가 잇을경우 해당 객체는 누르면 stop할수 있게 설정.  
    if (globals.buttonObject) {
      globals.buttonObject.textContent = globals.buttonStopText;
    }
  } // initializeSlideShowMarkup
  
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  /** 가장 긴 길이를 가진 이미지에 맞춰서 길이 설정 */
  function maxSlideWidth() {
    var maxWidth = 0;
    var maxSlideIndex = 0;
    var slideCount = globals.slideImages.length;
    
    for (var i = 0; i < slideCount; i++) {
      if (globals.slideImages[i].width > maxWidth) {
        maxWidth = globals.slideImages[i].width; // The width of the widest slide so far.
        maxSlideIndex = i; // The slide with the widest width so far.
      }
    }

    return globals.slideImages[maxSlideIndex].getBoundingClientRect().width; // Account for the image's border, padding, and margin values. Note that getBoundingClientRect() is always in units of pixels.
  } // maxSlideWidth
  
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    
  /** 가장 높은 높이를 찾아서 저장함 */
  function maxSlideHeight() {
    var maxHeight = 0;
    var maxSlideIndex = 0;    
    var slideCount = globals.slideImages.length;
    
    for (var i = 0; i < slideCount; i++) {
      if (globals.slideImages[i].height > maxHeight) {
        maxHeight = globals.slideImages[i].height; // The height of the tallest slide so far.
        maxSlideIndex = i; // The slide with the tallest height so far.
      }
    }
    
    return globals.slideImages[maxSlideIndex].getBoundingClientRect().height; // Account for the image's border, padding, and margin values. Note that getBoundingClientRect() is always in units of pixels.
  } // maxSlideHeight

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  /** setInterval를 이용해서 일정시간 텀을 두고 transitionslides를 반복시킨다. */
  function startSlideShow() {
    globals.slideShowID = setInterval(transitionSlides, globals.slideDelay);                
  } // startSlideShow

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
  /** clearInterval를 이용해서 setInternal 를 멈춘다. */
  function haltSlideShow() {
    clearInterval(globals.slideShowID);   
  } // haltSlideShow

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
  /** 슬라이드 쇼를 멈추고, 시작 명령  */
  function toggleSlideShow() {
    if (globals.slideShowRunning) {
      haltSlideShow();
      if (globals.buttonObject) { 
        globals.buttonObject.textContent = globals.buttonStartText; 
      }
    }
    else {
      startSlideShow();
      if (globals.buttonObject) { 
        globals.buttonObject.textContent = globals.buttonStopText; 
      }            
    }
    globals.slideShowRunning = !(globals.slideShowRunning);
  } // toggleSlideShow
  
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  /** 이미지 인덱스를 변화시켜 다음 이미지를 보이게 하고 나머지는 투명처리 한다.  */
  function transitionSlides() {
    var currentSlide = globals.slideImages[globals.slideIndex];
    
    ++(globals.slideIndex);
    if (globals.slideIndex >= globals.slideImages.length) {
      globals.slideIndex = 0;
    }
    
    var nextSlide = globals.slideImages[globals.slideIndex];
    
    var currentSlideOpacity = 1; // Fade the current slide out.
    var nextSlideOpacity = 0; // Fade the next slide in.
    var opacityLevelIncrement = 1 / globals.fadeDelay;
    var fadeActiveSlidesID = setInterval(fadeActiveSlides, globals.fadeDelay);
    
    /** 슬라이드 투명 처리 */
    function fadeActiveSlides() {
      currentSlideOpacity -= opacityLevelIncrement;
      nextSlideOpacity += opacityLevelIncrement;
      
      // console.log(currentSlideOpacity + nextSlideOpacity); // This should always be very close to 1.
      
      if (currentSlideOpacity >= 0 && nextSlideOpacity <= 1) {
        currentSlide.style.opacity = currentSlideOpacity;
        nextSlide.style.opacity = nextSlideOpacity; 
      }
      else {
        currentSlide.style.opacity = 0;
        nextSlide.style.opacity = 1; 
        clearInterval(fadeActiveSlidesID);
      }        
    } // fadeActiveSlides
  } // transitionSlides
  
} // slideShow
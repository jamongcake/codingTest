- # Coding Test

  - 이직시 면접에서의 코딩 테스트를 대비하기 위해서 생성했습니다.
  - 아래 목록들은 [[이 곳\]](https://github.com/h5bp/Front-end-Developer-Interview-Questions/tree/master/Translations/Korean) 에서 **그대로** 가져 왔습니다.
  - 원래 항목에는 질문만 있는 경우가 많아서 답변도 같이 만들려고 합니다.
  - 참고 출처
    - http://insanehong.kr/post/front-end-developer-interview-javascript/
    - http://insanehong.kr/post/front-end-developer-interview-html/
    - http://zinee-world.tistory.com/121

  ------

  # 면접 문제 은행

  @version 1.0

  ## Contributors

  @bentruyman ([http://bentruyman.com/](http://bentruyman.com/)), @roger_raymond ([http://twitter.com/iansym](http://twitter.com/iansym)), @ajpiano ([http://ajpiano.com/](http://ajpiano.com/)), @paul_irish ([http://paulirish.com/](http://paulirish.com/)), @SlexAxton ([http://alexsexton.com/](http://alexsexton.com/)), @boazsender ([http://boazsender.com/](http://boazsender.com/)), @miketaylr ([http://miketaylr.com/](http://miketaylr.com/)), @vladikoff ([http://vladfilippov.com/](http://vladfilippov.com/)), @gf3 ([http://gf3.ca/](http://gf3.ca/)), @jon_neal ([http://twitter.com/jon_neal](http://twitter.com/jon_neal)), @wookiehangover ([http://wookiehangover.com/](http://wookiehangover.com/)) and @darcy_clarke ([http://darcyclarke.me](http://darcyclarke.me/))

  ## 한국어 번역(한국 상황에 맞춰서 약간 수정 하였습니다.)

  @ohgyun([http://ohgyun.com](http://ohgyun.com/)), @nerdog, @javarouka, @Songhun([http://songhun.blogspot.com](http://songhun.blogspot.com/))

  ## 일반적인 질문:

  - Twitter,Facebook 혹은 Me2day등의 SNS를 사용하시나요?
    - 사용한다면, 누구를 팔로우 하고 있나요?
  - GitHub을 사용하시나요?
    - 사용한다면, 어떤 프로젝트를 Watch 혹은 Fork하시나요?
  - 자주 보는 Blog가 있습니까?
  - 버전 관리 시스템은 어떤 것들을 사용해보셨습니까?
  - 선호하는 개발 환경은 무엇입니까? (운영체제, 에디터, 브라우저, 도구 등등)
  - 당신이 웹 페이지를 만들 때의 과정을 설명 해주실 수 있을까요?
  - 점진적 향상법(progressive enhancement)과 우아한 성능저하법(graceful degradation)의 차이를 설명하실 수 있습니까? [[답변\]](https://github.com/abhbtbb/codingTest/blob/master/ANSWER/Progressive%20enhancement.md)"누구도 성공하지 못합니다" 라고 말하면 보너스 포인트를 주세요.각 특색을 설명을 한다면, 더 높은 보너스 포인트를 주세요.
  - "시멘틱 HTML(Semantic HTML)"이 무엇을 뜻하는지 설명해주세요. [[답변\]](https://github.com/abhbtbb/codingTest/blob/master/ANSWER/Semantic%20Tag.md)
  - "최소화(minification)"가 무엇을 하는 것입니까? [[답변\]](https://github.com/abhbtbb/codingTest/blob/master/ANSWER/Minification.md)
  - 여러 도메인을 이용하여 서버 사이트 데이터를 제공하는 것이 더 나은 이유는 무엇인가요?
    - 브라우저가 한 번에 1개의 도메인에서 다운로드 받는 리소스는 몇 개 인가요? [[답변\]](https://github.com/abhbtbb/codingTest/blob/master/ANSWER/browserDomain.md)
  - 만약에 디자인을 표현하기 위해 8개의 다른 Stylesheet를 가지고 있다면, 사이트에서는 어떻게 통합하실 건가요? [[답변]](/ANSWER/StylesheetIntegration.md)
    - 파일의 연결법을 찾아내세요.
    - Build system을 이용한 결합없이, `@import`를 사용하면 점수를 깎으세요.
  - 당신이 프로젝트에 합류했습니다. 근데 그들은 Tab을 이용하고, 당신은 Sapce를 사용했습니다. 어떻게 하실건가요?
    - `:retab!` 명령어를 아는지 확인
  - 간단한 Slideshow 페이지를 만들어보세요.[[ CSS만 사용한 버전]](ANSWER/webpage.index.html)   ////  [[javascript 사용버전]](ANSWER/webpage/slidejs.html)
    - Javascript를 사용하지 않고 만들었다면, 보너스 점수가 있습니다.
  - 당신의 코드의 성능을 테스트하기 위해서 사용하는 도구가 무엇입니까?
  - 올해 당신이 익히고 싶은 기술이 있다면, 그것은 무엇입니까?
  - 페이지 로딩 시간을 줄이는 3가지 방법은? [[ 답변 ] ](../decreasePageLoading.md)
  - 표준의 중요함을 설명하세요.

  ## HTML에 관련된 질문들:

  - `doctype`이 무엇을 하는 것이고, 몇 번 지정할 수 있나요?
  - 표준모드(standards mode)와 쿽스모드(quirks mode)의 다른 점은 무엇인가요?
  - XHTML을 이용한 페이지의 한계점은 무엇이 있나요?
    - `application/xhtml+xml`으로 지정한 페이지에 어떠한 문제가 있나요?
  - 다국어가 포함된 페이지는 어떤 방식으로 제공하나요?
  - HTML5에서 XHTML문법을 사용할 수 있나요? HTML5에서 XML을 어떻게 사용하나요?
  - `data-`속성은 무엇을 하는 것인가요?
  - HTML4에서 콘텐츠 모델(content models)은 무엇이며, HTML5의 그것과 다른 점은 무엇인가요?
  - HTML5를 오픈웹플랫폼(open web platform)으로 생각해본다면, 어떤 것들로 구성돼 있을까요?
  - 쿠키(Cookies)와 세션저장소(sessionStorage)와 로컬저장소(localStorage)의 차이점을 설명해주세요.

  ## Javascript에 관련된 질문들:

  - 사용해 본 Javascript 라이브러리들을 말씀해주세요.
  - Java와 Javascript의 다른 점은 무엇인가요?
  - `undefined`와 `undeclared` 변수는 무엇인가요?
  - 클로져(Closure)는 무엇이며, 어떻게/왜 사용하는지 설명해주세요.
    - 클로져를 만들 때 선호하는 패턴은 무엇인가요? argyle (IIFEs에만 적용할 수 있다)??

  > 클로져란 현재의 유효범위를 넘어 스코프 체인으로 연결되어 있는 객체, 변수 등의 참조를 발생시키는 것을 말한다. 

  - 스코프 체인이란?

  > 유효 범위를 나타내는 스코프가 [[Scope]] 프로퍼티로 각 함수 객체 내에서 연결 리스트 형식으로 관리되는 것.

  - 익명함수(anonymous functions)는 주로 어떤 상황에서 사용하나요?
  - "Javascript 모듈 패턴(Javascript module pattern)"이 무엇인지 설명을 해주시고, 언제 사용하는지도 말씀해주시기 바랍니다.
    - "네임스페이스(namespacing)"에 대해서 언급을 하면, 보너스 포인트가 있습니다.
    - 당신의 모듈이 네임스페이스가 없는 상황이라면?
  - 당신의 코드를 어떻게 구성하는지?(모듈 패턴, Class기반 상속?)
  - 호스트 객체(Host Objects)와 네이티브 객체(Native Objects)의 차이점은 무엇인가요?

  > 네이티브 객체 : 브라우저 혹은 구동 엔진에 내장되어 있는 객체를 말한다.  BOM 브라우저 객체 모델과 DOM 이라는 문서 객체모델이 포함된다.
  >
  > 호스트 객체 : 빌트인 객체와 네이티브 객체에 포함되지 않은 사용자에 의해 생성된 객체를 의미한다.

  - 다음 코드의 차이점은 무엇인가요?

  ```
  function Person(){} var person = Person() var person = new Person()
  ```

  - `.call`과 `.apply`의 차이점은 무엇인가요?

  > Function.prototype이 소유한 메소드들이다. 함수와 메소드가 실행될때 this를 할당할수 있다. 보통 정적인 호출일때는 call, 동적인 호출에는 apply를 사용하게 된다. 

  - `Function.prototype.bind`을 설명 하시오

  > 함수 실행시 컨텍스트의 객체(this)를 임의로 할당해 주어서 동적 호출시에도 오류 없이 작동하도록 해준다.

  - 코드 최적화를 하는 시점은 언제인가요?
  - Javascript에서 어떻게 상속을 하는지 설명할 수 있나요?
    - "누구도 할 수 없어요" 같은 재밌는 대답 시에 보너스 포인트가 있습니다.
    - 안되는 이유에 대해서 설명을 시도한다면, 더 많은 점수를 주세요.
  - `document.write()`를 언제 사용하시나요?정답 : 1999년 - 초보개발자를 걸러내기 위한 시절
  - UA문자열을 이용하여 기능 검출(feature detection)과 기능 추론(feature inference)의 차이점을 설명 하시오.
  - AJAX에 관해 가능한 자세히 설명하세요.

  > Asynchronous javascript and XML의 약자이다. XMLHttpRequest 객체를 이용하여 비동기 방식으로 서버와 통신을 한다. ajax는 브라우저의 url 주소의 변경을 이용하지 않고 내부적으로 통신하여 response를 받아오기 때문에 비동기로 특정 데이터만 가져오는데에 ㅅ용된다. 하지만 Same Origin Policy 정책으로 크로스 도멩ㄴ이 되지 않아 외부 도메인을 사용해야 하는 경우 JSONP, XML을 이용한다.

  - JSONP가 어떻게 동작 되는지 설명하세요.(그리고,실제 AJAX와 어떻게 다른지 설명하세요.)

  > Ajax는 크로스 도메인이 비허용이다. 이를 해결하기 위해 JSONP를 사용하는데 GET만 가능하다.  JSONP는 스크리븥 코드가 DOM 트리에 추가되면, 실행하면서 외부 스크립트를 로드할수 있는 것을 이용한 것이다. 동적으로 외부 스크립트를 호출하면서 콜백 함수를 해주면 스크립트 실행후 콜백함수를 실행한다는 로직으로 구성되어 있다.

  - 기존에 Javascript 템플릿을 사용한 적이 있나요? 만약에 있다면, 어떠한 방식으로 사용했는지 말씀해주세요.
  - "호이스팅(Hoisting)"에 대해서 설명 하시오.

  > JS엔진이 실행 컨텍스트를 생성하면서 스코프를 정의할때 순서와 상관없이 선언부에 대한 해석처리를 최우선으로 하는 것을 의미한다. 선언에만 적용되며 할당 구문에는 적용되지 않는다.

  - FOUC가 무엇이며 FOUC를 어떻게 방지하나요?

  > FOUC는 Flash Of Unstyled Content 의 약자로, 외부 CSS가 불러오기 전에 잠시 스타일이 적용되지 않는 웹 페이지가 나타나는 현상이다. 이를 해결하기위해 CSS는 head에 포함시켜 css 로드 없이 DOM 트리를 구성하는 것을 방지해준다.

  - 이벤트 버블링(Event Bubbling)에 대해서 설명하세요.
  - "속성(Attribute)"와 "요소(property)"의 차이가 무엇인가요?
  - Javascript 빌트인객체를 확장하는 것이 좋지 않은 이유는 무엇인가요?

  > JS의 빌트인 객체는 스펙에 의해 구현되어 있는 것이며 추후 추가될수가 있다. 이렇게 될 경우 빌트인 객체에 확장시킨 것과 동일할 경우 덮어쓰기가 되면서 제대로 작동이 되지 않거나 수정이 필요할 수 있다. 따라서 JS의 빌트인 객체는 그냥 그대로 두는 것이 좋다.

  - Document Load 이벤트와 Ready 이벤트의 차이가 무엇인가요?

  > Read 이벤트 :  DOM 트리가 만들어지면 발생한다. 리소스 다운로드 상태와는 상관 없다. Element 구조를 형성하면 발생한다.
  >
  > Load 이벤트 :  페이지에 정의된 모든 리소스의 다운로드가 완료될 경우 발생한다. 

  - `==`와 `===`의 차이점은 무엇인가요?

  > == 는 자동 형변환 이후 체크, ===는 형변환 없이 그대로 체크한다.

  - 브라우저의 URL에서 파라메터를 얻을 수 있는 방법에 대해서 설명하세요.

  > document.location 내에 있는 객체들을 이용하면된다.

  - Javascript의 "동일출처정책(the same-origin policy)"에 대해서 설명하세요.

  > js는 스트립트가 사용자의 입력을 가지고 다른 페이지에 보내는 것을 막기 위한 보안 정책으로 동일 출처 정책을 가지고 있다. 

  - 이벤트 전달의 3단계는?

  > 캡처링 -> 대상 -> 버블링
  >
  > 캡처링 : 이벤트 객체가 window 객체로부터 대상의 부모까지 순서대로 전달되는 단계
  >
  > 대상 : 이벤트 객체가 이벤트 대상에 도달하는 단계.
  >
  > 이벤트 : 이벤트 객체가 대상의 부모부터 window 객체까지 역순으로 전파되는 단계

  - 이벤트 딜리게이션(Event Delegation)에 대해서 설명하세요.

  > 이벤트 딜리게이션은 이벤트가 발생되어야 하는 객체에 이벤트 바인딩하는 것이 아닌 상위 요소에 이벤트를 할당하고 event 객체를 넘겨줘서 이벤트 타겟에 간저적으로 이벤트 바인딩 효과를 준다. 주로 다수의 DOM에 한꺼번에 이벤트 리스너를 할당해야 하거나 동적인 DOM에 이벤트 리스너를 그때 그때 할당해야 할 때 사용한다.

  - Javascript의 상속패턴(inheritance patterns)에 대해서 설명하세요.
  - 다음 코드를 동작하게 만드세요.

  ```
  [1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5]

  Array.prototype.duplicator = function(){
    return this.concat( this );
  }
  ```

  - Javascript에서 메모이제이션(memoization, 중복 계산 방지)에 대한 전략을 설명해주세요.
  - 삼항식(Ternary statement)을 사용하는 이유는 무엇이고, 그것을 표현하기 위한 연산자 단어는 무엇인가요?  JS에서 삼항식을 사용하는 것은 조건부 삼항 연산자 로 주로 if 문의 축약형으로 사용된다.
    ` condition ? expr1 : expr2 `
  - arity는 어떠한 함수인가요? 함수의 인자 수를 나타내는 것으로 지금은 존재하지 않으며 Function.prototype.length프로퍼티로 대체되었다. 

  ## Javascript 코드 예제:

  ```
  >~~3.14
  ```

  문제: 위 상황의 결과 값은?

  **답: 3**

  ```
  "i'm a lasagna hog".split("").reverse().join("");
  ```

  문제: 위 상황의 결과 값은?

  **답: "goh angasal a m'i"**

  ```
  ( window.foo || ( window.foo = "bar" ) );
  ```

  문제: window.foo의 값은 무엇인가요?

  **답: "bar"**

  처음에 window.foo는 false, undefined 혹은 0등의 값을 가지고 있다.

  ```
  var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
  ```

  문제: 어떠한 두 가지의 알럿이 나올까요?

  **답: "Hello World" & ReferenceError: bar is not defined**

  ## jQuery에 연관된 질문들:

  - "체이닝(Chaining)"에 대해서 설명 하세요.
  - `.end()`는 무엇을 하는 것입니까?
  - 이벤트 핸들러 선언 시, 언제 그리고 왜 namespace를 부여하는지를 설명해주세요.
  - 이펙트 큐(queue)라는 것은 무엇인가요?
  - `.get()`,`[]` 그리고 `.eq()`의 차이점이 무엇인가요?
  - `.bind()`,`.live()`그리고 `.delegate()`의 차이점이 무엇인가요?
  - `$`과 `$.fn` 차이점이 무엇인지 설명 해주시오. 혹은, `$.fn`가 무엇인지 설명해주세요.
  - 다음 Selector를 최적화 해주세요.:

  ```
  $(".foo div#bar:eq(0)")
  ```

  ## CSS 관련 질문들:

  - "reset" CSS가 무엇인지, 어떻게 유용한지 설명 해주세요.
  - Floats가 어떻게 동작하는지 설명해주세요.
  - 클리어링(Clearing) 기술에는 어떤 것들이 있으며, 어떠한 경우에 어떻게 사용하는 것이 적절한지 설명하세요.
  - CSS 스프라이트(CSS Sprites)를 설명하고, 페이지나 사이트를 어떻게 향상시키는지 설명하시오.
  - IE box model과 W3C box model의 차이점을 설명하시오.
  - Image Replacement를 사용해야 할 때, 선호하는 기술과 언제 사용하는지를 설명 해주세요.
  - CSS 요소핵(CSS property hacks)을 조건부적으로 .css파일안에 넣으시나요 혹은 다른 방식이 있나요?
  - 기능이 제약된 브라우저를 위해서 어떤 방식으로 페이지를 만드나요?
    - 어떠한 기술과 절차를 거치는지 설명하시오.
  - 컨텐츠를 안보이게 하는 기술들의 차이점을 설명하시오.(그리고 스크린 리더(Screen readers)에서 접근이 가능한 방법은?)
  - 그리드 시스템(Grid system)을 사용한 적이 있나요? 있다면 어떠한 것을 선호하나요?
  - 미디어 쿼리(media queries)를 사용한 적이 있나요? 혹은 모바일에 맞는 layout과 CSS를 사용한 적이 있나요?
  - SVG를 스타일링 하기 위한 편한 방법이 있나요?
  - 인쇄를 하기 위해 웹페이지를 어떻게 최적화 하나요?
  - 효율적인 CSS를 작성하기 위한 "비법(gotchas)"은 어떤 게 있나요?
  - CSS 전처리(CSS preprocessors)를 사용해보셨나요?
    - 그렇다면, 사용 경험에 기반해 좋았던 점과 나빴던 점을 설명해주세요.
  - 페이지에서 표준 폰트가 아닌 폰트 디자인을 사용할 때 어떤 방식으로 처리하시나요?(웹폰트를 제외하고)
  - CSS Selector가 어떠한 원리로 동작하는지 설명하시오.

  ## 그 외 흥미로운 질문들:

  - 당신이 작성한 코드 중 어떤 것을 가장 멋지고, 자랑스럽게 여기나요?
  - HTML5 gang sign에 대해서 아시나요?
  - 배를 타본 적이 있으세요?
  - Firebug와 Webkit Inspector에서 좋아하는 부분을 말씀해주세요.
  - 당신 스스로 하는 프로젝트가 있나요? 어떤 종류인가요?
  - "유니콘화(cornify)"의 의미를 설명해주세요.
  - 한장의 종이 위에, A B C D E를 차례대로 내려 쓰시오. 그다음, 코드로 작성하지 말고, 역순으로 재배치 해보세요.
    - 종이를 위아래를 뒤집어낼 때 까지 기다리세요.
    - 이것은 인터뷰의 끝에 긴장감을 풀어주고 웃음을 줄 수 있는 좋은 방법이 입니다.
  - 해적입니까? 닌자입니까?
    - 만약에 둘 다 이며, 좋은 이유를 댄다면 보너스 점수를 주세요.(좀비 몽키 해적 닌자인 경우엔 +2)
  - 만약에 웹개발을 안했다면, 무엇을 했었을까요?
  - Carmen Sandiego는 세상의 어디에 있을가요?(힌트 : 그들의 답은 항상 틀릴겁니다.)
  - Internet Explorer의 당신이 좋아하는 기능은 무엇입니까?
  - 다음 문장을 완성하세요 : Brendan Eich 와 Doug Crockford 는 Javascript의 __________ 이다.
  - jQuery: 훌륭한 라이브러리인가요? 최고로 좋은 라이브러리인가요? 토론하세요.


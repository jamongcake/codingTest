# Minification ( 최소화 )

컴퓨터 프로그래밍 언어, 특히 자바스크립트에서 Minification (최소화)는 소스코드에서 기능적인 부분의 변경 없이 모든 불필요한 문자들을 제거하는 프로세스이다.

이러한 불필요한 문자은 대개 화이트 스페이스, new line characters (개행문자), 주석, 탭, 그리고 block delimiter 가 있으며 이러한 문자들을 가독성을 위해서 추가된 것이지 실행과는 무관하다.

특히 인터넷에 배포나 실서버에서 적용하는 인터프리터 언어들에 있어서 최소화된 소스코드는 특히 유용하다.

왜냐하면 필요한 전송 데이터의 크기, 대역폭을 줄여주기 때문이다. 이것은 트래픽이 작아진다는 것을 의미한다.

최소화된 소스코드는 일종의 난독화로 사용되어 질수 있다. 물론 이러한 최소화된 코드는 다시 pretty-printer로 가독성 좋게 만들수는 있지만 말이다.

웹 어플리케이션과 웹사이트에서의 컴포넌트와 라이브러리는 파일 요청과 빠른 페이지 로드 타임을 다양한 파일들의 사이즈를 줄임으로서 최적화를 시키려 한다.

자바스크립트와 CSS 리소스들은 그들의 파일 사이즈를 상당히 즐임에도 그들의 동작은 유지가 된다.

 [Closure Tools ](https://developers.google.com/closure/)프로젝트는 구글 엔지니어들의 노력을 보여준다.

 [Closure Compiler](http://closure-compiler.appspot.com/home) 는 자바스크립트를 조밀하면서도 높은 성능의 코드로 컴파일해서 높은 압축과 향상된 최적화를 이루어낸다.

최소화 작업은 웹사이트에서 텍스트 기반 부분을 분석하고 rewrite 해서 전체 파일 사이즈를 줄임으로서 진행된다. 웹브라우저에 사이트를 렌더링 하는데 사용되는 다른 컴포넌트, css, 스크립트등에 까지 적용범위가 확장된다.

최소화는 response가 보내지기 이전에 웹서버에서 동작하며 최소화 이후에 웹서버는 축소된 asset들을 오리지널 asset 대신에 사용해서 더 빠른 배포를 행한다.

출처

[https://en.wikipedia.org/wiki/Minification_(programming)](https://en.wikipedia.org/wiki/Minification_(programming))

[https://www.maxcdn.com/one/visual-glossary/minification/](https://www.maxcdn.com/one/visual-glossary/minification/)
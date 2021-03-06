# Progressive enhancement



## 점진적 향상 ( Progressive enhancement )



### 정의

- 점진적 기능향상은 웹 디자인에 대한 계층화된 접근법으로서, 컨텐츠와 사용자, 접근성에 초점을 둔다.
- 첫단계는 HTML, CSS, JS 를 분리하는데 있지만 이 세가지를 HTML, CSS, JS 라고 하지 않고 구조, 표현, 행위 라는 계층으로 나타낸다. 
  - 구조 structure : 첫번째 계층이며 컨텐츠를 적절히 마크업한다.
  - 표현  presentation : 두번째 계층이며 CSS를 다룬다.
  - 행위 behavior : 행위를 나타내며 자바스크립트가 이에 해당한다.
- 이 세계층은 서로 통합돼 있지만 서로 접촉하지 않게 되어 있다는 것이다. JS와 CSS는 HTML을 필요로 하지만 HTML만으로도 사이트는 동작하며 이들을 제거해도 컨텐츠를 잃어버리지 않는다.



### 목적

- 점진적 기능 향상의 목적은 컨텐츠에 중요성을 두는 것이다. 
- 계층을 파일로 분리해두면 사용자가 JS 없이 사이트를 방문하려고 했더라도 JS가 외부 파일에 들어있기 때문에 사용하지도 않을 코드를 모두 내려받느라 대역폭을 낭비하지 않아도 된다.



### 접근성

- 컨텐츠에 언제든지 접근할 수 있음을 보장할 수 있다. 
- 구조 계층이 다른 계층과 독립성을 유지함으로써 유의미하고 가벼운 상태를 유지할수 있다.
- HTML 을 깔끔하고 의미 있고, 시멘틱을 살리게끔 유지한다면 제한된 대역폭 ~ 스크린 리더 소프트웨어 에 이르기 까지 모든 사람들이 컨텐츠를 쉽게 소비할 수 있다.



### 재사용성

- 모든 계층을 분리하면 코드의 재사용 가능성이 높아진다.
- 코드가 제대로 분리되지 않은 프로젝트에서 사용된 자바스크립트나 CSS의 특정 줄을 찾기가 어렵고 재사용하기 어렵다.



### 혜택

1. 이러한 작업과 사전구성을 하는 것이 나중에 그것을 고치는데 드는 많은 시간을 줄여준다.
2. 성능
   - CSS와 JS 파일을 외부에서 연결함으로써 브라우저가 사용자마다 그것을 메모리상에 캐시하게 할 수 있다. 다시 접속을 하게 되면  이러한 asset이 캐시된 후 사용자는 내부페이지를 대상으로만들어진 HTML만 받으면 된다. 인라인 CSS, 인라인 JS를 받지 않아도 되므로 사이트 로딩 속도가 빨라지고 HTTP요청이 최소화된다.
3. 확장성
   - 기능 추가
     - 기능을 추가하거나 디자인을 변경할때 좀더 용이하다.
     - JS 수정하는 사람과  CSS를 수정하는 사람이 팀 단위로 일할 때도 도움이 된다.
   - 미래를 위한 규모 확장 ( 모바일 )
     - 미디어 쿼리를 이용한 모바일 인터페이스 확장 또는 JS를 통한 터치 인터페이스를 확장
     - 다양한 플랫폼에 배포할수 있는 다양한 기능 및  UI를 추가할 수 있다.





## 단계적 기능 축소  ( graceful degradation )

### 정의

- 개발자가 가장 고급 버전의 브라우저를 위한 소프트웨어를 만드는 것 뿐만 아니라 이전 버전의 브라우저에서도 소프트웨어가 동작하게 만드는 것이다.
- 소프트웨어의 장식적 요소를 모두 이용할 수는 없겠지만 모든 것들이 동작할 것이다. 즉, 사용자 경험을 낮춰서라도 기능 및 컨텐츠를 전달하는 것이다.
- 컴퓨터 시스템에서 허용오차시스템 ( Fault tolerant system ) 과 유사한데, 허용오차시스템은 프로그램 구동 환경에 문제가 생겨도 프로그램이 정지하지 않고 성능을 낮추면서 프로그램 구동을 지속하도록 하는 시스템이다.

### 예시

- HTML - IMG 태그에 alt 속성을 지정한다.
- javascript에서 <noscript>  태그
  - 이 태그는 javascript가 동작하지 않는 브라우저에서 동작한다.







| 종류        | 주요 초점                       |
| --------- | --------------------------- |
| 점진적 향상    | 컨텐츠 // 구조, 표현, 행위 간의 계층적 분리 |
| 단계적 기능 축소 | 브라우저                        |





출처
개발자와 디자이너가 함께 보는 자바스크립트 프로그래밍
http://webprogrammer.tistory.com/1964




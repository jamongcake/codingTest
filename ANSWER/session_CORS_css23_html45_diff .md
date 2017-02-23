## 쿠키 

사용자의 브라우저에 데이터가 저장되며 보안성이 없다.
텍스트 정보이며 최대 4kb까지, 20개까지 허용, 모든 사이트 통틀어 300개 제한

쿠키는 서버에서 생성하여 클라이언트의 브라우저에서 관리하기 때문에 요청시 쿠키를 생성하고 브라우저를 닫을 때 쿠키를 파괴한다. 응답을 통해 얻어온 쿠키는 만료시간 여부에 따라 클라이언트의 PC에 파일로 저장하게 된다.



## 세션

서버에 저장되는 쿠키이다. 서버에 직접 접근하지 않는 이상 데이터 탈취가 어렵다.
사용자가 웹에 접속하면 서버는 세션을, 사용자에게는 세션 쿠키를 생성해서 세션에 해당하는 쿠키 값을 확인해서 사용자를 판단한다.

하지만 사용자가 로그인 되어 있는 상태에서 해당 세션 값을 알아내어 자신의 세션 값으로 변경하면 로그인이 가능하다. 이것을 세션 하이제킹이라고 한다.



## 캐시

쿠키는 변수, 값을 저장한다면 캐시는 파일을 저장하는 것이다.



ajax 비동기 방식 설명

순차적 콜백이 많을때 해결 방안



## AJAX

Asynchronos Javascript And XML 의 약자이다. 
HTML, Javascript, Dom, XMLHttpRequest 등을 활용해서 사용하는 기술의 묶음을 지칭한다. 
Ajax 애플리케이션은 필요한 데이터 만을 웹서버에 요청해서 받은 후 클라이언트에서 데이터에 대한 처리를 할수 있다. 웹 서버에서 전적으로 처리되던 데이터 처리의 일부분이 클라이언트 쪽에서 처리되므로 웹 브라우저와 서버사이에 교환되는 데이터량과 처리량이 줄어들어 애플리케이션의 응답성이 좋아지며 전체적인 웹 서버처리량도 줄어들게 된다.

하지만 같은 웹서버에서 데이터 교환은 가능하지만 다른 웹서버에서는 되지 않는다. 

#### 과정

1. XMLHTTPRequest object 생성
2. callback function todtjd
3. Open request  후 http.method 와 URL을 보낸다.
4. send the request



## Cross origin resource sharing ( CORS )

javascrip에서는 Cross-site HTTP Requests 가 Same Origin Policy를 적용받기 때문에 되지 않는다. 이것을 해결하기 위해 CORS 라는 이름의 권고안이 나왔다.



### CORS 요청 종류

- Simple / Preflight, Credential / Non-Credential의 조합으로 4가지 존재한다.
- 브라우저가 요청 내용을 분석하여 4가지 방식중 하나의 방식으로 서버에 request를 하므로 그에 맞게 코딩



#### Simeple Request

- Get, HEAD, POST 중 한가지 방식을 사용해야 한다.
- POST  방식일 경우 Content-type이 아래 셋중 하나여야 한다.
  - applicatoin/x-www-form-urlencoded
  - multipart/form-data
  - text/plain
- 커스텀 헤더를 전송하지 말아야 한다.



#### Preflight Request

- Simple Request 조건에 해당하지 않으면 브라우저는 Preflight Request 방식으로 요청한다.
- Get, HEAD, POST 외의 다른 방식으로도 요청가능
- application/xml처럼 다른 Content-type 요청 가능
- 커스텀 헤더도 사용가능
- 이 Request는 예비요청, 본 요청을 순서에 따라 보낸다.



#### Request with Credential

- HTTP Coodie와 HTTP Authentication 정보를 인식할 수 있게 해주는 요청



#### Request without Credential

- CORS 요청은 기본적으로 Non-Credential 요청이므로 ```xhr.withCredentials = true``` 를 지정하지 않으면 Non-Credential 요청이다.



### Same Origin Policy

한 출처에서 로드된 문서나 스크립트가 다른 출처 자원과 상호작용하지 못하게 제약한다.

- 프로토콜, 포트, 호스트가 다를 경우에 발생한다.



## HTML5와 HTML4.01와의 차이점

### 1 . Contents Model

- 컨텐츠 모델이란 어떤 요소가 어떤 컨텐츠 또는 요소를 포함할수 있는지에 대한 정의를 말한다.
- HTML5이전 문서만 해도 Block, Inline 엘리먼트로 구분되는 태그를 가지고, 트리 형태의 계층 구조를 이루고 그에 따라 컨텐츠에 접근하였다.
- HTML5문에서는 Contents Model이라는 개념이 추가되어 문서의 아웃라인을 잡고 컨텐츠를 구성할 수 있게 되었다. 이로인해 기존보다 훨씬 시멘틱한 웹 구성이 가능해졌다.



### 2 . Syntax 구문

- 전체적으로 구문이 많이 간소화 되었다.



### 3 . Language 언어

- 새롭게 추가되거나 변경된 엘리먼트 및 속성들이 많다.
- 기존보다 5에서는 시멘틱 요소 중심으로 새로운 엘리먼트가 추가되어 컨텐츠들이 한층 유용한 정보가 되었다. 



### 4 . API

- Video, Audio API 가 추가되었으며 오프라인을 지원하는 API 기능등  그외에도 여러 API가 추가되었다.



## CSS2와 CSS3의 차이점

- 3에서는 이미지를 사용하지 않고 그라데이션, 모서리를 둥글게 처리하는 등의 표현력이 증가 되었다.
- 또한 세분화해서 관리할수 있게 다양한 기능이 모듈화 되어 모듈별로 개발이 가능하다.
- 하지만 ie8까지는 css3가 지원하지 않는다.



출처 

http://hanmomhanda.github.io/2015/07/21/Cross-Origin-Resource-Sharing/

http://jeongchul.tistory.com/457
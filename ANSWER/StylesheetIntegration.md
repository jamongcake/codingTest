# Stylesheet 통합

### HTML에 CSS를 적용 방법

1. 외부 스타일 시트 External Style Sheet
   - css 파일을 만들고 이것을 HTML에 연결한다.
   - 장점은 점진적 향상법을 따른다는 것이다. ( 분리, 수정 및 확장의 용이함 )
   - 단점은 많아지면 지나치게 복잡해지거나 관리가 어려워진다.
2. 내부 스타일 시트 Internal Style Sheet
   - HTML 문서내에서 <style> 엘리먼트를 주고 그 안에 여러 스타일을 준다.
   - 한 HTML 파일내에 적용하는 스타일을 줄수 있다.
3. 인라인 스타일 InlineStyle
   - 각 HTML 엘리먼트 안에 style 속성을 주는 방식이다.
   - 가장 적용 우선순위가 높다.



### 외부 스타일 시트 적용방법

1. link 엘리먼트를 사용

```css
<link rel='stylesheet'type='text/css' href='abc.css'>
```

2. @import 를 사용

```css
@import url("abc.css");
```



### link 엘리먼트 선호 이유

   [ 아래 내용은 2009년 IE 6,7,8  기준이다. ]

- link를 쓰는 것이 import를 쓰는 것보다 속도가 더 빠르다.
- @import는 순서와 상관없이 스크립트가 먼저 로딩된다.
- style & link와 import가 같은 페이지에서 불러오게 될 경우, 동시에 병렬적으로 다운받지 않고 직렬적으로 받게 된다.
- 이것은 스타일시트 안에 있을때도 마찬가지다. 즉 ``` <link ... href='abc.css'>``` 라고 하고 abc.css안에 ```@import url(kkk.css)``` 가 있을 경우 병렬 다운로드가 되지 않고 abc.css안의 내용이 일단 다운로드 되고 그 다음에 그것이 끝난 이후에야 kkk.css가 다운 받아진 다는 것이다.
- @import만 있을때에는 병렬 다운로드가 이루어지지만 위에서 아래로 순서를 가지고 받는것이 아니라 랜덤하게 다운을 받는다.



### 스타일시트 CSS 통합하기

##### Grunt를 이용한 CSS 통합

```javascript
/* grunt-concat-css 이용*/

// 터미널에 입력
npm install grunt-concat-css --save-dev
// package.json
{
	"name" : "test-project",
    "version" : "1.0.0",
    "devDependencies" : {
    	"grunt" : "~0.4.1",
        "grunt-concat-css" : "^0.4.5",
        "grunt-contrib" : "~0.7.0"  // grunt-contrib는 공식플러그인을 의미.
    }
}

// Gruntfile.js
module.exports = function(grunt){
  
	//Project configuration.
 	grunt.initConfig({
    	concat_css:{
          	all : {
              	// 합쳐질 파일 경로
            	src : ['src/css/common.css','src/css/layout.css', 
                       'src/css/*.css' ,  '!*.min.css'],  // !는 제외하는 css를 말함
              	// 병합후 저장되는 경로 및 파일명
              	dest : 'src/css/style.css'
          	}
    	}  
 	});
  
  	//Load the plugin.
   grunt.loadNpmTasks(‘grunt-concat-css’);
   grunt.registerTask(‘default’, [‘concat_css’]);
}

// 이후 grunt default 라고 입력하면 됨.
```



### CSS 압축하기

##### Grunt를 이용한 CSS 압축

```javascript
/* grunt-contrib-cssmin 이용*/

// 터미널에 입력
npm install grunt-contrib-cssmin --save-dev

// Gruntfile.js
module.exports = function(grunt){
  
	//Project configuration.
 	grunt.initConfig({
    	cssmin:{
        	options:{
            	compatibility : 'ie8',
              	keepSpecialComments : 1
             	//default : ! 붙은 주석 보통, 1 : !붙은 첫번째 주석만 보존 0: 모든주석제거
        	}
          	dist : {
              	// 합쳐질 파일 경로
            	src : ['src/css/common.css','src/css/layout.css', 'src/css/*.css'], 
          		//src : '<%= csscomb.dist.dest %> csscomb 작업결과물을 바로 받는 것.
          
              	// 병합후 저장되는 경로 및 파일명
              	dest : 'src/css/style.min.css'
          	}
    	}  
 	});
}
```







### 추가 -- CSS 최적화

1. CSS Sprite 사용 
   - 여러 이미지들을 하나의 이미지로 합치고 CSS 속성을 이용해서 원하는 부분만 보여준다.
2. CSS 파일들을 통합
   - HTTP Request를 감소시킨다.
3. 외부 파일로 CSS 파일을 생성
   - 외부 CSS 파일로 만들면 한번 다운받은 뒤에는 캐시되어져 이후 재사용을 하게 된다.
4. CSS 파일은 header/top에 위치하고 JS 는 아래에 작성하라.
   - 페이지 렌더링을 빠르게 해주며 스타일 미적용 페이지, 흰색 페이지, 번쩍 거림을 피할수 있다.
5. @import 대신 LINK 엘리먼트 사용
6. 비슷한 스타일들을 그룹화 ( 추후 수정시에 중복 없고 관리하게 용이함 )
7. CSS 통합, 최소화 툴을 사용
8. **주어진 엘리먼트가 적합한지 확인하는데 고려해야할 규칙 수가 적을수록 성능이 좋아진다.**
   - universal 규칙을 피하라 ( ID, Class, Tag에 속하지 않는 규칙 )
   - ID, Class, Tag에 쓸모없는 것들을 붙이지 말 것.
   - 자손선택자를 피하라. (CSS에서 가장 속도가 느린 선택자이며 FF UI CSS에서는 제거됨.)
   - Tag 규칙에서는 자식선택자를 절대로 포함하지 말라.
   - 왠만하면 자식 선택자는 피하라 ``` .abc > .def {...}```
   - 상속을 이용하라. 상속을 통해 자식 엘리먼트에 굳이 적용하지 않아도 되도록 하라.
9. Expires 헤더, ETag 헤더 를 추가하라. 
   - 외부파일 (스크립트, 이미지, CSS ) 를 많이 사용하는데 이 파일들의 헤더에 expires 정보를 추가해서 캐시하는 것만으로도 성능을 올릴수 있다.
10.  Gzip 압축을 사용하라
    - 외부파일들을 압축할수 있다. 대부분의 브라우저가 이 Gzip 압축전송을 지원하며, 헤더 정보를 수정하고 서버단 작업으로 구현 가능하다.
11. CSS -> Expressions 사용을 자제하라
    - IE 계열 브라우저에서만 작동하는 expression은 브라우저로 하여금 무리한 연산을 요구한다.
12. DNS 확인 시간을 줄여라. 
    - DNS 확인 하는데에도 시간이 든다. DNS 정보 역시 브라우저의 저장영역에 캐시되어 있기 때문에 같은 도메인 네임을 사용할 경우 DNS 확인에 걸리는 시간을 최소화 할수 있다.
13.  리다이렉트는 피하라
    - 포워딩과 달리 리다이렉트는 2차례에 걸쳐 통신한다.
14. Ajax를 캐시하도록 하라.







출처 

http://egloos.zum.com/seye2/v/2319809

http://www.stevesouders.com/blog/2009/04/09/dont-use-import/

https://blog.outsider.ne.kr/952

http://seye2.egloos.com/2428232

https://developer.mozilla.org/ko/docs/Web/CSS/Writing_Efficient_CSS

https://firejune.com/1302/YDN%EC%9D%B4+%EA%B6%8C%EC%9E%A5%ED%95%98%EB%8A%94+%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%9D%98+%EC%84%B1%EB%8A%A5+%EC%B5%9C%EC%A0%81%ED%99%94+%EC%A7%80%EC%B9%A8+15%EA%B3%84%EB%AA%85
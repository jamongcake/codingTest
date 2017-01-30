# css 관련 질문들

### reset Css 이란?

reset css는 각 브라우저가 가지고 있는 기본 css를 재설정하는 것이다.

```css
/* 대표적인 예시 */
html, body {margin:0px; padding:0px;}
ul {margin:0px; padding:0px; list-style:none;}
```

다양한 reset Css가 존재하는데 http://cssreset.com/ 에서 그것들을 확인할수 있다.



### Floats 작동 원리?

포지셔닝의 가장 큰 목적은, 블록 속성을 가진 1개이상의 객체를 원하는 위치에 정렬시키는데 있다.

블록 속성을 가진 객체를 정렬하는 가장 기본적인 방법은 , css 의 float 속성을 이용하는 것이다. 이 속성은 좌, 우만 존재하고 중앙정렬은 존재하지 않으며 중앙정렬은 margin 속성을 이용해야 한다.

```css
div { width:50%; margin:0% auto}
```

일반적으로 block element는 너비 100% 값을 가지고 있다. 하지만 float가 선언되면 자신의 너비를 최소화 하게 된다. 



#### 응용법

##### 동일한 엘리먼트에 각각 float적용, 미적용 되어 있을 경우 

```html
<div class="one padding10">div1</div>
<div class="two padding10">div2</div>
```

```css
.one{background:#59b1f6;float:left}
.two{background:#ffb5b4;overflow:hidden}
.padding10{padding: 10px;}
div{color:white; margin:0px 5px}
```

위와 같이 **div1이 float 속성을 가지고 있고 div2가 float속성을 가지고 있지 않을 경우**에 div2는 div1뒤에서 100% 너비로 차지하게 된다.  div1, div2사이에 margin을 줘도 적용이 제대로 되지 않는다.

이럴때 가장 쉬운 해결책은 div2에 ```overflow:hidden```을 선언하는 것이다.
이 속성은 원래 내용물이 오브젝트보다 클 경우에, 넘치는 부분을 안보이게 해주는 역할을 하게 된다. 여기서는 float 속성이 없어서 제대로 보이지 않는 오브젝트를 보여준다.



##### 상위엘리먼트 no float & 하위 엘리먼트 with float

두개의 float속성의 엘리먼트를 포함하는 상위 엘리먼트는 하위 엘리먼드들이 전부 float를 가지고 있다면 정상적인 높이 값을 가지지 못한다. 이러한 상황에서의 해결책은 float 속성을 가진 엘리먼트의 상위 엘리먼트가``` overflow:hidden ```속성을 선언하는 것이다.

```html
<div class="wrap">
  <div class="one padding10">div1</div>
  <div class="two padding10">div2</div>  
</div> 
```

```css
.wrap{background:#FFDDA6;padding:5%;overflow:hidden;}
.one{background:#59b1f6;float:left; width:37.5%; margin-right:5%}
.two{background:#ffb5b4;float:left; width:37.5%}
.padding10{padding: 5%;}
div{color:white;}
```



##### 상위엘리먼트 no float & 하위 엘리먼트 with float 후에 div 엘리먼트

이런 경우에 상위 엘리먼트에 ```overflow:hidden``` 이 되어 있거나 아니면 ```both:clear``` 를 하지 않으면 상위 엘리먼트 안의 하위엘리먼트에 적용되어 있는 ```float``` 의 영향을 받아서 그 뒤에 붙게 된다.



##### float를 적용한 엘리먼트와 그렇지 않는 엘리먼트의 조합

가끔 float가 적용된 엘리먼트와 그렇지 않는 엘리먼트를 하나의 인라인처럼 보이게 조합하는 경우가 있다. 이러한 경우 다음의 규칙을 기억해 둬야 한다.

- 너비가 변화하는 오브젝트는 float 속성을 선언해서는 안된다.
- float 속성이 없는 오브젝트에는 박스 모델 문제를 해결하기 위해 ```overflow:hidden``` 속성을 선언한다.
- HTML에서는 float 속성이 없는 오브젝트 다음에 오는 오브젝트는 무조건 다음 라인 에서 시작하게 된다. 같은 라인에서 있지 못한다. 따라서 float 가 없는 오브젝트는 HTML 문법에서 맨마지막에 위치해야한다.
- float가 없는 오브젝트 이후에 오는 오브젝트는 float가 있어도 다음 라인으로 떨어지고 ```overflow:hidden```이 있어도 마찬가지로 다음 라인으로 떨어지게 된다.

```html
/* div4를 div3 뒤로 옮겨보면 잘 알수 있다. */
<div class="one padding10">div1</div>
<div class="two padding10">div2</div>  
<div class="four padding10">div4</div>
<div class="three padding10">div3</div>
```

```css
.one{background:#59b1f6;float:left; width:10%; margin-right:5%}
.two{background:#ffb5b4;float:right; width:10%; margin-left:5%}
.three{background:#A9E2C5; overflow:hidden }
.four{background:#9197B5; float:left;margin-right:5%; width:10%}
.padding10{padding: 3%;}
div{color:white;}
```

https://jsfiddle.net/wisewalk/Lq7dtbmt/ <= 들어가면 위의 예제를 테스트 할수 있다.



### Clearing 기술

float 속성을 설정한 이후 그것에 영향을 받지 않거나 해당 속성에 영향받는 엘리먼트의 height를 조정하기 위해서 사용한다.







참고출처

http://zinee-world.tistory.com/121
http://naradesign.net/wp/2008/05/27/144/
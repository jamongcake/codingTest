# 직방 프론트 엔드 코딩 테스트



### 간단 설명

안녕하세요. 저는 직방 프론트 엔드 부분에 지원한 박철훈 이라고 합니다.
코딩 테스트 과제를 받게 되어서 해당 항목들을 구현해 보았습니다.
AMP는 들어만 보았지 써보는 것은 처음이라서 독학해가면서 과제를 수행했습니다.



### 구현항목

1. 순수 자바스크립트로 코드를 작성
2. 문의하기 클릭시 모바일에서 전화걸기 가능
3. html validation 체크
4. 매물 이미지 클릭시 이미지 모달창 구현
5. 다음 지도 API 연동
6. 이미지 슬라이드 구현
7. JSON 데이터 가져오기
8. 반응형 구현하기 ( 320, 480, 640, 768, 960, 1024 )
9. AMP 구현하기
    1. 이미지 슬라이드 구현
    2. JSON 데이터 가져오기
    3. 구글 지도 API 연동
    4. 문의하기 클릭시 모바일에서 전화걸기
    5. 순수 자바스크립트 + AMP 이용
    6. 매물 이미지 클릭시 이미지 모달창
    7. 반응형 구현하기



### 구조 설명

```
README.md               // 간단한 소개입니다.
index.html              // 일반적인 구현입니다.
index.amp.html          // AMP를 적용한 구현입니다.

css 폴더
    index.css           // index.html에 쓰인 css 파일입니다.

img 폴더				 // 이미지 파일들이 있습니다.
	academy.png
	man.png
	room.png
	room1.png
	room2.pnd

js 폴더
    index.js            // index.html에 쓰인 js 파일입니다.

json 폴더
    items.json          // index.html에 쓰인 json 파일입니다.
    ampJson.json        // AMP 파일에 쓰인 json 파일입니다. 
                        // AMP에서는 내부 객체 이름이 items이어야 하기 때문에 이렇게 했습니다.
```



### 실행 환경

기존 것은 Ajax를 이용한 Json파일을 가져오고, AMP는 가이드 상에서 웹서버가 필요하다고 되어 있습니다. 
따라서 아래와 같이 간단한 웹서버를 실행 시켜야 제대로 웹 사이트가 작동이 됩니다.  

python2 설치시 : ```python -m SimpleHTTPServer``` 
python3 설치시 : ```python -m http.server```

AMP의 경우 nodeJS를 이용한 웹서버를 실행시키면 제대로 작동을 하지 않거나 콘솔창에서 오류가 나타납니다. 
이것은 AMP 자체가 자신이 인정하지 않는 다른  스크립트 코드가 들어오는 것을 허용하지 않기 때문입니다.  

HTML VALIDATION은 [https://validator.w3.org/](https://validator.w3.org/) 에서 확인해 보았습니다.  

AMP의 경우 [http://localhost:8000/index.amp.html#development=1](http://localhost:8000/index.amp.html#development=1) 으로 간단하게 확인을 해보았습니다. 
위와 같이 #development=1 이라고 추가해서 하면 콘솔창에서 validator 결과가 확인 가능합니다.  

개발은 전체적으로 VS Code를 이용했으며 모바일 웹을 산정해서 ```크롬 개발자 도구 > Toggle Device Toolbar``` 를 이용해서 개발을 진행했습니다.


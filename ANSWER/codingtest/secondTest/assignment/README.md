<h1>직방 프론트 엔드 코딩 테스트</h1>

<h2>간단 설명</h2>
안녕하세요. 저는 직방 프론트 엔드 부분에 지원한 박철훈 이라고 합니다.<br/>
코딩 테스트 과제를 받게 되어서 해당 항목들을 구현해 보았습니다.<br/>

<h2>구현항목</h2>
1. 순수 자바스크립트로 코드를 작성
2. 문의하기 클릭시 모바일에서 전화걸기 가능
3. html validation 체크
4. 매물 이미지 클릭시 이미지 모달창 구현
5. 다음 지도 API 연동
6. 이미지 슬라이드 구현
7. JSON 데이터 가져오기
8. AMP 구현하기
    1. 이미지 슬라이드 구현
    2. JSON 데이터 가져오기
    3. 구글 지도 API 연동
    4. 문의하기 클릭시 모바일에서 전화걸기
    5. 순수 자바스크립트 + AMP 이용
    6. 매물 이미지 클릭시 이미지 모달창

<h2>구조 설명</h2>
```
README.md               // 간단한 소개입니다.
index.html              // 일반적인 구현입니다.
index.amp.html          // AMP를 적용한 구현입니다.

css
    in2.css             // uglyfy 하게 압축 버전입니다.
    index.css           // index.html에 쓰인 css 파일입니다.

js
    index.js            // index.html에 쓰인 js 파일입니다.

json
    items.json          // index.html에 쓰인 json 파일입니다.
    ampJson.json        // AMP 파일에 쓰인 json 파일입니다. 
                        // AMP에서는 내부 객체 이름이 items이어야 하기 때문에 이렇게 했습니다.

```




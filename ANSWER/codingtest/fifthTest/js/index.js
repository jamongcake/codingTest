
const z = new ItemList('testID', './img/marioworld.png');
const r = new Render('area', z);

z.addItem({
    image: "./img/seoul1.jpg",
    content: ""}
);

z.addItem({
    image: "./img/seoul2.png",
    content: ""}
);

console.log(z);

// 원래 이렇게 사용하면 안되지만, 테스트 때문에 이렇게 코드를 썼습니다.
z._itemList[0].addComment('jackson', '멋진 노을이네요!!');
z._itemList[0].addComment('kinesis', '음 배고프다. 밥먹자.');
z._itemList[0].addComment('lol1234', '겜 안 들어오고 뭐하냐?');
z._itemList[0].addComment('popsong', 'somewhere over the rainbow');
z._itemList[0].addComment('ididid5', '음냐냐냐');

console.log(z._itemList[0]);

r.render();

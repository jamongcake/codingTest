class Render {
    constructor(area,itemList) {
        const temp = document.getElementById(area);
        if (!temp) throw "해당 #ID가 없습니다.";
        if(!(itemList instanceof ItemList)) throw "itemList는 ItemList 클래스이어야 합니다.";

        this._area = document.getElementById(area);
        this._itemList = itemList;
    }

    render() {
        const list = this._itemList.getItemList();
        this._area.innerHTML = "";
        for(let i = 0; i < list.length; i++) {
            const container = document.createElement('div');
            container.className = 'container';

            const oneItem = list[i];
            const userId = this._itemList.id;

            //===========================================HEAD==================================
            let head = document.createElement('div');
            {
                head.className = "head"
                
                let img = document.createElement('img');
                img.src = this._itemList.userPicture;
                img.alt = "유저아이콘"
                
                let p = document.createElement('p');
                p.innerHTML = userId;
                
                head.appendChild(img);
                head.appendChild(p);
            }
            container.appendChild(head);
            //===========================================HEAD END==================================

            //===========================================picture==================================

            let picture = document.createElement('div');
            {
                picture.className = "picture";
                let img = document.createElement('img');
                img.src = oneItem.get('image');
                img.alt = "메인 사진";
                picture.appendChild(img);
            }
            container.appendChild(picture);
            //===========================================picture END==================================
            
            //===========================================comment==================================
            let likeComment = document.createElement('div');
            let iComment = document.createElement('i');
            {
                likeComment.className = "like-comment";
                let likes = document.createElement('div');
                let iHeart = document.createElement('i');
                let like = document.createElement('p');

                iHeart.className = "i-heart";
                iComment.className = "i-comment";
                like.innerHTML = `좋아요 ${oneItem._likes} 개`;
                iHeart.addEventListener('click', () => {
                    oneItem.addCount.bind(oneItem)();
                    this.render();
                });

                likes.appendChild(iHeart);
                likes.appendChild(iComment);
                likes.appendChild(like);
                likeComment.appendChild(likes);
            }

            let comments = document.createElement('div');
            comments.className = "comments";
            {
                const commentsData = oneItem.getComments();
                let p1 = document.createElement('p');
                p1.innerHTML = "댓글 더 보기";
                let ul = document.createElement('ul');

                for (let one in commentsData){
                    const oneCommentData = JSON.parse(commentsData[one]);
                    let li = document.createElement('li');
                    let spanId = document.createElement('span');
                    spanId.innerHTML = oneCommentData.id;
                    let spanContent = document.createElement('span');
                    spanContent.innerHTML = oneCommentData.content;
        
                    li.appendChild(spanId);
                    li.appendChild(spanContent);
                    ul.appendChild(li);
                }
                comments.appendChild(ul);
            }
            likeComment.appendChild(comments);
// 여기까지
            let date = document.createElement('p');
            date.innerHTML = oneItem.getPastTime() + '전';
            likeComment.appendChild(date);

            let enterComment = document.createElement('div');
            {
                enterComment.className = 'enter-comment';
                let inputText = document.createElement('input');
                inputText.type = 'text';
                inputText.placeholder = "댓글 달기...";
                inputText.addEventListener('keypress', (e) => {
                    if(e.keyCode === 13) {
                        oneItem.addComment.bind(oneItem)(userId, e.target.value);
                        this.render();
                    }
                });

                iComment.addEventListener('click', () => {
                    inputText.focus();
                });
                
                enterComment.appendChild(inputText);
            }
            likeComment.appendChild(enterComment);
            container.appendChild(likeComment);
            //===========================================comment END==================================

            this._area.appendChild(container);
        }
        
    }
    // 이벤트로 받고 그것에 대한 결과가 오면 render를 호출한다.
}

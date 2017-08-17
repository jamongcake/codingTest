class ItemList {
    constructor(id, picture) {
        this._id = id;
        this._itemList = [];
        this._userPicture = picture;
    }
    addItem({image, content}) {
        this._itemList.push(new ItemOne(this._id, image, content) );
        return true;
    }
    getItemList() {
        return this._itemList;
    }
    get id() {
        return this._id;
    }
    get userPicture() {
        return this._userPicture;
    }
}

class ItemOne {
    constructor(id, image, content) {
        this._id = id;
        this._image = image;
        this._content = content;
        this._likes = 0;
        this._likeCheck = false;
        this._commentList = [];     // comment 클래스만 들어간다.
        this._date = new Date();
    }
    addComment(id, comment) {
        this._commentList.push(new Comment(id, comment));
        return true;
    }
    addCount() {
        this._likeCheck? this._likes-- : this._likes++;
        this._likeCheck = !this._likeCheck;
        return true;
    }
    getComments() {
        return this._commentList.map(one => JSON.stringify(one.toString()));
    }
    getPastTime() {
        const period = [60, 60, 24];
        const txt = ['초', '분', '시간', '일'];
        const now = new Date();
        let value = (now - this._date)/1000;
        let i = 0;
        for(i; i < period.length; i++) {
            if(value < period[i]) return ~~value + txt[i];
            value = value / period[i];
        }
        return ~~value + txt[i];   
    }
    get(something) {
        return this[`_${something}`];
    }
}

class Comment {
    constructor(id, content) {
        this._id = id;
        this._content = content;
        this._date = new Date();
    }
    toString() {
        return {id:this._id, content:this._content, date:this._date}
    }
}

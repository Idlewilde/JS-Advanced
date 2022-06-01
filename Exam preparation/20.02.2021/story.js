class Story {

    constructor(title,creator) {
        this.title=title;
        this.creator=creator;
        this._comments = [];
        this._likes = [];
    }
    get likes(){
        if(this._likes.length==0){return `${this.title} has 0 likes`}
       else if(this._likes.length==1){return `${this._likes[0]} likes this story!`}
        else{return`${this._likes[0]} and ${this._likes.length - 1} others like this story!`}
        }

    like(username){
        if(this._likes.includes(username)){throw new Error("You can't like the same story twice!");}
        if(username==this.creator){throw new Error("You can't like your own story!");}
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username){
        if(!this._likes.includes(username)){throw new Error("You can't dislike this story!");}
        const indexOfObject = this._likes.findIndex(el => {
            return el === username;
          });
          
          this._likes.splice(indexOfObject, 1);
          return `${username} disliked ${this.title}`
    }

    comment(username, content, id){
        let idExists=false;
        for(let i=0; i<this._comments.length; i++){
            if(this._comments[i].id===id){idExists=true;
                let repliesArr = this._comments[i].replies;
                let replyID=0;
                if(repliesArr.length==0){replyID=id+0.1;}
                else{replyID=repliesArr[repliesArr.length-1].id+0.1;}
                repliesArr.push({'id':replyID,'username':username,'content':content});
                return "You replied successfully";}}

        if(!idExists||id==undefined){
            let newID= this._comments.length+1;
            
        let currentComment = {
            "id":newID,
            "username":username,
            "content":content,
            "replies":[]
        }
        this._comments.push(currentComment);
        return `${username} commented on ${this.title}`;
    }}

    toString(sortingType){
        if(sortingType=='asc'){
            this._comments.sort((a, b) => {
                return a.id - b.id;
            });
        for(let i = 0; i<this._comments.length; i++){
            this._comments[i].replies.sort((a, b) => {
                return a.id - b.id;});
        }}
        else if(sortingType=='desc'){
            this._comments.sort((a, b) => {
                return b.id - a.id;
            });
            for(let i = 0; i<this._comments.length; i++){
                this._comments[i].replies.sort((a, b) => {
                    return b.id - a.id;});
            }}
        else if(sortingType=='username'){
                this._comments.sort((a, b) => a.username.localeCompare(b.username));
                for(let i = 0; i<this._comments.length; i++){
                    this._comments[i].replies.sort((a, b) => a.username.localeCompare(b.username));
                }}
                let output = '';
                output+=`Title: ${this.title}\n`
                output+=`Creator: ${this.creator}\n`
                output+=`Likes: ${this._likes.length}\n`
                output+=`Comments:\n`

                for(let i=0;i<this._comments.length;i++){
                    output+=`-- ${this._comments[i].id}. ${this._comments[i].username}: ${this._comments[i].content}\n`;
                    if(this._comments[i].replies.length>0){
                        for(let j=0;j<this._comments[i].replies.length;j++){
                            output+=`--- ${this._comments[i].replies[j].id.toFixed(1)}. ${this._comments[i].replies[j].username}: ${this._comments[i].replies[j].content}\n`;
                        }
                    }
                }
                return output.trim()
    }
}

let a = new Story('a','a');
console.log(a.comment('a','cont'));
console.log(a.comment('b','cont',23));
console.log(a.comment('c','cont',2));


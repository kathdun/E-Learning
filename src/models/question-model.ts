
export default class question {
    id:number;
    postId:number;
    auteur:string;
    contenu:string;
    date:Date;
    likes:number[];

    constructor(  
        id:number,
        postId:number,
        auteur:string="",
        contenu:string="",
        date:Date=new Date(),
        likes:number[]
        ) {
            this.id=id;
            this.postId=postId;
            this.auteur=auteur;
            this.contenu=contenu;
            this.date=date;
            this.likes=likes;
            }
}


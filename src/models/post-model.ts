export default class PostModel{
 id:number;
auteur:string;
description:string;
classe:string;
cours:string;
questions:number;
date: Date;
contentURL:string;
classesConcernees:string[];

   

    constructor(
        id:number,
        auteur:string="Anonyme",
        description:string="",
        classe:string="3il 4",
        cours:string="Informatique",
        questions:number,
        date:Date=new Date(),
        contentURL="https://www.youtube.com/watch?v=lHTLVe_v8Eg",   
        classesConcernees:string[]=[]
    ) {
        this.id=id;
        this.auteur=auteur;
        this.description=description;
        this.classe=classe;
        this.cours=cours;
        this.questions=questions;
        this.date=date;
        this.contentURL=contentURL;   
        this.classesConcernees=classesConcernees;
    }
   
}
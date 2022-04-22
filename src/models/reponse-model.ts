
export default class reponse {
    id:number;
    auteur:string;
    contenu:string;
    date:Date;

    constructor(  
        id:number,
        auteur:string="",
        contenu:string="",
        date:Date=new Date()
        ) {
            this.id=id;
            this.auteur=auteur;
            this.contenu=contenu;
            this.date=date;
    }
}


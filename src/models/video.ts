export default class video{
    titre: string;
    source: string;
    duree: number;
    qualite: string;
    date: Date;
    description:string;
    auteur:string;
   
       constructor(
           titre:string="Video",
           source:string="",
           duree:number=0,
           qualite:string="mp4",
           date:Date=new Date(),
           description:string,
           auteur:string=""
           ){
           this.titre=titre;
           this.source=source;
           this.duree=duree;
           this.qualite=qualite;
           this.date=date;
           this.description=description;
           this.auteur=auteur;
       }
   }
   
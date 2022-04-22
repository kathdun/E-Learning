
export default class User{
    id:number;
    login:string;
    password:string;
    nom:string;
    classe:string;
    
    constructor(
        id:number,
        login:string="Anonyme",
        password:string="",
        nom:string="Pseudo",
        classe:string="3IL 4"
    ) {
        this.id=id;
        this.login=login;
        this.password=password;
        this.nom=nom;
        this.classe=classe;
    }    
   
}
import UserService from '../services/user-services'
import UserModel from '../models/user-model'

var USERS:UserModel[]=[];
UserService.getUsers().then(users=>USERS.push(...users));
//console.log(USERS);
export default class AuthentificationService {
  
  
    static isValidAuth:boolean=false;
     static login(username:string,password:string){
         let isValidAuth:boolean=false;

         USERS.forEach(user=>{
             if(username===user.login && password===user.password){
                isValidAuth=true;
                localStorage.setItem('user',JSON.stringify(user));
                //console.log(localStorage.getItem('user'));
             }
         });
       this.isValidAuth=isValidAuth;
       return this.isValidAuth;
     }
        
    
}
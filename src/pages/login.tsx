import React,{FunctionComponent, useState} from 'react';
import User from '../models/user-model';
import AuthService from '../services/authentification-service';
import { useHistory } from 'react-router-dom';


type Props={
    User:User
}

type Field={
    value?: any,
    error?:string,
    isValid?:boolean
}

 type Form={
    login:Field,
    password:Field
 }



const Login:FunctionComponent<Props>=({User})=>{
     const history=useHistory();
    
    const [form, setForm]=useState<Form>({
        login:{ value:"",isValid:true},
        password:{value:"",isValid:true}
    });

 const handleInputChange=(e : React.ChangeEvent<HTMLInputElement>) =>{
     const fieldName:string=e.target.name;
     const fieldValue:string=e.target.value;
     const newField:Field={[fieldName]:{value:fieldValue}};
     setForm({...form,...newField});
 } 

 const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    
    // PostService.getPost(3);
    const isValidForm=validateForm();
    const isValidAuth=AuthService.login(form.login.value,form.password.value);
    if(isValidForm && isValidAuth){
        history.push("/home");
       
    }
  
}

const validateForm = () => {
    let newForm: Form = form;

    // Validator login
    if(!/^[a-zA-Zàéè0-9 ]{1,25}$/.test(form.login.value)) {
      const errorMsg: string = 'matricule incorrecte';
      const newField: Field = { value: form.login.value, error: errorMsg, isValid: false };
      newForm = { ...newForm, ...{ login: newField } };
    } else {
      const newField: Field = { value: form.login.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ login: newField } };
    }

    if(!/^[a-zA-Zàéè0-9 ]{1,25}$/.test(form.password.value)) {
        const errorMsg: string = 'Le mot de passe incorrecte';
        const newField: Field = { value: form.password.value, error: errorMsg, isValid: false };
        newForm = { ...newForm, ...{ password: newField } };
      } else {
        const newField: Field = { value: form.password.value, error: '', isValid: true };
        newForm = { ...newForm, ...{ password: newField } };
      }
    setForm(newForm);
    return newForm.login.isValid && newForm.password.isValid;
  }


    return(
        <div className="login-main-div d-flex flex-column flex-sm-row  justify-content-between">
            <div className="col-md-6 col-sm-12 ">
                <div className=" logo-div container border-secondary m-t-110 p-5   border-right d-flex justify-content-center">
                    <img src="images/logo.svg" alt="logo" width="180"/> 
                </div>     
            </div>
            <div className="form-div col-md-6  col-sm-12">
                <form onSubmit={e=>handleSubmit(e)} className="col-md-8 m-t-110 m-l-100" action="" method="post">
                    <div className="d-flex   col-sm-12 justify-content-center text-white ">
                        <h4>Creer un Compte</h4>
                    </div>
                    <div className="form-group  col-sm-12 container">
                        <label htmlFor=""></label>
                        <input className="form-control  bgblack" name="login" onChange={e=>handleInputChange(e)} placeholder="Matricule" value={form.login.value} type="text"/>
                        {form.login.error &&
                            <div className=" mt-2 container alert alert-danger">{form.login.error}</div>
                        }
                        
                    </div>
                    <div className="form-group  col-sm-12">
                        <label htmlFor=""></label>
                        <input className="form-control py-2 bgblack" name="password" placeholder="Mot de passe" onChange={e=>handleInputChange(e)} value={form.password.value} type="text"/>
                        {form.password.error &&
                            <div className=" mt-2 container alert alert-danger">{form.password.error}</div>
                        }
                    </div>
                    <div className="d-flex justify-content-center p-2">
                        <button className="btn btn-success flex-grow-1" type="submit">Confirmer</button>
                    </div>          
                </form>               
            </div>
        </div>
    );
}

export default Login;
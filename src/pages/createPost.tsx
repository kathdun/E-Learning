
import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Classes from '../models/classes';
import PostModel from '../models/post-model';
import User from '../models/user-model';
import PostService from '../services/post-service';


type Props={
    Post:PostModel
}

type Field={
    value?: any,
    error?:string,
    isValid?:boolean
}

 type Form={
    titre:Field,
    description:Field,
    url:Field,
    classes: Field

 }
 


const CreatePost:FunctionComponent<Props>=()=>{
    const history=useHistory(); 
    var maxID=Number.parseInt(''+localStorage.getItem('maxID'))+1;
    var user:User=JSON.parse(''+localStorage.getItem('user'));
    
    
    const [form,setForm]=useState<Form>({
            titre:{ value: "", isValid:true},
            description:{ value:"", isValid:true},
            url:{ value:"https://...", isValid:true},
            classes:{value:"", isValid:true}
    });
        const appartenir=(classe:string):boolean=>{
            return form.classes.value.includes(classe);
   
}

    const handleInputChange=(e : React.ChangeEvent<HTMLInputElement>)=>{
        const fieldName: string=e.target.name;
        const fieldValue:string=e.target.value;
        const newField: Field={[fieldName]:{value:fieldValue}};
        setForm({...form, ...newField});
    }

    // const handleFileChange=(e : React.F)=>{
    //     const fieldName: string=e.target.name;
    //     const fieldValue:string=e.target.value;
    //     const newField: Field={[fieldName]:{value:fieldValue}};
    //     setForm({...form, ...newField});
    // }
    const handleTextAreaChange=(e : React.ChangeEvent<HTMLTextAreaElement>)=>{
        const fieldName: string=e.target.name;
        const fieldValue:string=e.target.value;
        const newField: Field={[fieldName]:{value:fieldValue}};
        setForm({...form, ...newField});
    }

    const selectClass=(classe:string, e : React.ChangeEvent<HTMLInputElement>)=>{
        const checked=e.target.checked;
        let newField:Field;
        if(checked){
            const newclasses=form.classes.value.concat([classe]);
            newField={value:newclasses};
        }else{
            const newclasses:string[]=form.classes.value.filter((currentClass:string)=>currentClass!==classe);
            newField={value:newclasses};
        }
        setForm({...form, ...{ classes : newField} });
    }

    // const selectAll=()=>{
    //     let newField:Field;
    //      var a:boolean=true;
               
    //     if(a){
    //         const newclasses=form.classes.value.concat(Classes);
    //         newField={value:newclasses};
    //         a=false;

    //     }else{
    //         const newclasses:string[]=form.classes.value.splice(0,form.classes.value.length);
    //         newField={value:newclasses};
    //         a=true;
    //     }
    //     console.log(form.classes.value);
    //     setForm({...form, ...{ classes : newField} });
        
        
    // }

    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        var post=new PostModel(maxID,user.nom,form.description.value,user.classe,form.titre.value,1,new Date(),form.url.value,form.classes.value)
        PostService.create(post);
        // setTimeout
         history.push("/home");
    }

    return(
        <div className="d-flex justify-content-center">
            <form onSubmit={e=>handleSubmit(e)} className="create-post-form d-flex col-md-10" action="">
                <div className="col-md-4 ">
                    <div className="form-check py-4 mt-4">
                        <h4 className="text-secondary">Classes Concernées</h4>
                        <div className="d-flex m-2">
                            <button /*onClick={e=>selectAll()}*/ className=" m-1 btn-success bo-rad-5">
                                <i className="fas fa-check-double    "></i>
                            </button>
                            <h6 className="d-flex align-self-center initialism text-dark">Selectionner Tout</h6>
                        </div>
                        <div className=" text-white border bo-rad-10">
                            {
                                Classes.map((classes,index) =>(
                                    <label className="form-check-label mx-4 p-2 px-3">
                                    <input key={index++} type="checkbox" onChange={e=>selectClass(classes,e)} className="form-check-input " name="check" id=""  checked={appartenir(classes)} />
                                        {classes}
                                </label>
                                ))
                            }
                        </div> 
                    </div>
                </div>
                <div className="post-div ml-sm-4 col-md-7 p-5 mt-4 flex-column ">
                <h4 className="text-secondary">Publication</h4>
                    <div className="form-group">
                        <label htmlFor=""></label>
                        <input type="text"  className="form-control" name="titre" id="" aria-describedby="helpId" onChange={e =>handleInputChange(e)} value={form.titre.value} placeholder="Titre"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor=""></label>
                        <textarea rows={4} className="form-control" name="description" id="" aria-describedby="helpId" onChange={e =>handleTextAreaChange(e)} value={form.description.value} placeholder="Description"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor=""></label>
                        <input type="text" className="form-control" name="url" id="" onChange={e =>handleInputChange(e)} aria-describedby="helpId" value={form.url.value}/>
                    </div>
                    <div className="d-flex justify-content-center  mt-2 form-group">
                        <label htmlFor=""></label>
                        <button className="btn px-5 post-button btn-success" type="submit">Publier</button>
                    </div>
                </div>
                
            </form>
        </div>
    );
    
}


export default CreatePost;
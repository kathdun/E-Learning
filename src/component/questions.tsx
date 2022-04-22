
import React, {FunctionComponent, useEffect, useState} from 'react'
import { useHistory } from 'react-router';
import QuestionModel from '../models/question-model';
import User from '../models/user-model';
import QuestionService from '../services/question-service';
// import Reponse from './reponse';



// type Props={
//     show?:boolean
//     postId?:string
// }

type Params={
    questionM:QuestionModel
    postID:number
}
   
const Question:FunctionComponent<Params>=({questionM,postID})=>{
   const [question,setQuestion]=useState<QuestionModel|null>(null);
   const [likes,setLikes]=useState<number[]>([]);
   var user:User=JSON.parse(''+localStorage.getItem('user'));
   var history=useHistory()

    useEffect(()=>{
        //console.log("PID: "+postID+" QID: "+questionM.id)
        if(postID===questionM.postId){
         setQuestion(questionM) 
         setLikes(questionM.likes)
        }
    },[postID]);
     var display="d-none";
    const handleShow=(show:boolean):string=>{
        display=(show)?"d-flex":"d-none";
        return display;
    }
   
    const onLike=()=>{
        if(!questionM.likes.includes(user.id)){
            questionM.likes.push(user.id)
            setLikes(questionM.likes)
            QuestionService.updateLikes(questionM.id,questionM.likes)
            history.push('/Home')
            
        }
    };
   
   
    return(
        <div>
            {    
            question?(
                <div className=" bo-rad-10 bg-light text-secondary">
                    <h6 className='m-2 pt-3 initialsm text-primary '>{questionM.auteur}</h6>
                    <p  className=" p-3">{questionM.contenu}</p>
                    <div className="container">
                        <div className="container d-flex text-dark border-top p-2 mx-1">
                            <div>{ likes.length}</div>
                            <span onClick={e=>onLike()}><i className="comment-icons mx-2 fa fa-handshake" aria-hidden="true"></i></span>
                            <span ><i className="comment-icons mx-2 fa fa-comment-dots" aria-hidden="true"></i></span> 
                            <span ><i className="comment-icons mx-2 fa fa-feather-alt" aria-hidden="true"></i></span> 
                        </div>
                        {/* <div className="d-flex justify-content-end pb-3"> <Reponse display={handleShow(show)} /></div> */}
                    </div>
                </div>
              
            ):(
                <h4 className="center"></h4> 
            )
                
            } 
        </div>
    );
}


export default Question;


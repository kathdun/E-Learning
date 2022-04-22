import React,{FunctionComponent, useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import PostModel from '../models/post-model';
import QuestionModel from '../models/question-model'
import QuestionService from '../services/question-service';

type Props={
    postModel:PostModel
};
//var counter:number=0;
const Post : FunctionComponent<Props>=({postModel})=>{

  const [questions,setQuestions]=useState<number>();
  const [comments,setComments]=useState<number>();
  
  const history=useHistory();
    
const goToPost=(id:number)=>{
    history.push(`/post/${id}`);
}
var  numQ=0;
    useEffect(() => {
        QuestionService.getNumQByPostID(postModel.id).then(num=>{
            setQuestions(num);
         });

    }, [])
    // QuestionService.getNumQByPostID(postModel.id)
   
    //console.log(QuestionService.getNumQByPostID(postModel.id).then(res=>res));
   
    return(
            <div className='main-div-post py-3 rounded bgdark col-md-12 mb-2 d-flex justify-content-center flex-column  text-white'>
                <div className='d-flex flex-row m-t-30'>
                    <div className=' m-r-md-10 px-3'>
                        <img className='img-thumbnail rounded-circle' src="/images/avatar.png" width='50' alt="profile"/> 
                    </div>
                    <div className='d-flex flex-column'>
                        <h5 className='mt-1'>{postModel.auteur}</h5>
                        <h5 className=' small pl-2 text-light'><span>8h</span> . <span>Public</span></h5>
                    </div>
                    <div className='border-left border-secondary m-l-50 p-2'> <span className="mx-3 badge badge-secondary">{postModel.cours}</span> </div>
                </div>
            
                <div className='p-3 m-t-20'>
                    <p>{postModel.description}</p>
                </div>                
                <div className='w-100 '>
                    <video className='w-100' controls>
                        <source src={postModel.contentURL} type="video/mp4"/>
                        <source src={postModel.contentURL} type="video/ogg"/>
                    </video>
                </div>
                <div className=' m-b-20 flex-column justify-content-center'>
                    <div className="container d-flex pl-2 pb-2 mt-3 text-light border-bottom">
                        <span><i className="comment-icons mx-3 fa fa-handshake" aria-hidden="true"></i></span>
                        <div>{questions}</div><span  onClick={()=>goToPost(postModel.id)}><i className="comment-icons mx-1 fa fa-question-circle" aria-hidden="true"></i></span> 
                        <span ><i className="comment-icons mx-3 fa fa-feather-alt" aria-hidden="true"></i></span> 
                    </div>
                    {/* <div className=" d-flex container justify-content-end py-2 ">
                        <textarea className="form-control"  placeholder="Poser une question" />
                        <button className="btn btn-light mx-1"><i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
                    </div>       */}
                </div>
                {/* <Question/>     */}
            </div>
    );
}
export default Post;
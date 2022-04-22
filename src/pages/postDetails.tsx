import React,{FunctionComponent,useEffect,useState} from 'react';
import {RouteComponentProps} from 'react-router-dom'
import PostModel from '../models/post-model'
import Post from '../component/post';
import Questions from '../component/questions'
import QuestionModel from '../models/question-model'
import QuestionService from '../services/question-service';
import PostService from '../services/post-service';


type Params={
    id:string
}

var QUESTIONS:QuestionModel[]=[];
 QuestionService.getQuestions().then(questions=>QUESTIONS.push(...questions));
 var POSTS:PostModel[]=[];
 PostService.getAll().then(posts=>POSTS.push(...posts));

const PostDetails:FunctionComponent<RouteComponentProps<Params>>=({match})=>{
    const [post,setPost]=useState<PostModel|null>(null);
    
    useEffect(()=>{
        
        POSTS.forEach(post =>{
            if(match.params.id===post.id.toString()){
                setPost(post)
            }
        });
    },[match.params.id]);
    // console.log(QUESTIONS);
    return(
        <div>
             {
             post ?
                (
                    <div className="d-flex justify-content-center  d-flex flex-column flex-sm-row mt-md-5 ">
                        <div className="container  col-md-7">
                            <Post postModel={post}/>
                        </div>
                         <div className="contaner  col-md-4">
                             <h4 className=" my-4 pb-2 border-bottom d-flex text-light justify-content-center">Questions</h4>
                            {QUESTIONS.map(quest=>(
                                    <Questions key={quest.id} postID={post.id} questionM={quest}/>
                            ))
                           
                            }
                            
                         </div>
                         
                    </div>
                   
                ):(
                    <h4 className="center">Aucun Post à afficher !</h4> 
                )
            }
           
        </div>
                )
}

export default PostDetails;
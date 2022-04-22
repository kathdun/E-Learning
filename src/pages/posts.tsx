import React,{FunctionComponent,useState,useEffect} from 'react';
import Post from '../component/post';
import PostService from '../services/post-service';
import PostModel from '../models/post-model';
import SearchBar from '../component/searchBar';
import UserModel from '../models/user-model'

const Posts : FunctionComponent=()=>{
    
    const [postList,setPosts]=useState<PostModel[]>([]);
    // const [couter,setCouter]=useState<number>();
    var user:UserModel=JSON.parse(""+localStorage.getItem("user"))
    useEffect(() => {
       // console.log(PostService.getBiggestId());
        
        PostService.getAll().then(posts => {
            localStorage.setItem('maxID',JSON.stringify(posts.length))
            var newPostList:PostModel[]=[];
            posts.forEach(post=>{
                if(post.classesConcernees.includes(user.classe) ){
                    newPostList.push(post)
                }
                else if(user.id==999){
                    newPostList.push(post)
                }
            })
          setPosts(newPostList)
        });
            
            // setCouter(posts.length);
               
    }, []);

    return(
        <div>
           <div className="w-100  d-flex flex-row">
              <div className="col-md-4  d-none d-sm-flex">
                     <div className="container p-5">
                       <ul className="list-unstyled text-white m-t-30">
                           <li className="mb-2">Compte</li>
                           <li  className="mb-2" >Les plus recent</li>
                           <li  className="mb-2" >Parametres</li>
                           <li  className="mb-2" >Ma filiere</li>
                       </ul>
                   </div>
               </div> 
                {/* <SideNavigation/> */}
                <div className='main-div mt-md-5  col-md-6'>
                    <SearchBar/>
                    {
                        postList.map(post =>(
                            <Post key={post.id} postModel={post}/>
                        ))
                        
                    }              
                </div>
              
           </div>
        </div>
    );
}
export default Posts;
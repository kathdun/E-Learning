import React, {FunctionComponent, useEffect, useState} from 'react';
import APropos from '../component/APropos';
import Post from '../component/post';
import SearchBar from '../component/searchBar';
import './profile.css';
import PostModel from '../models/post-model';
import PostService from '../services/post-service';
import UserModel from '../models/user-model'
import { set } from 'mongoose';



//var creds=localStorage.getItem('user');
       
const Profile: FunctionComponent=()=>{

    const [Posts, setPosts] = useState<PostModel[]>([]);
    const user:UserModel=JSON.parse(''+localStorage.getItem('user'));
  
     useEffect(() => {
         PostService.getAll().then(posts => setPosts(posts.filter(post=> post.auteur==user.nom)));
    }, [])
   
    
    return(
        <div className=" d-flex flex-column ">
            <div className="bgdark ">
                <div className="container">
                    <div className="p-2 d-flex justify-content-center profile-background">
                        <img className='' src="images/prof06.jpg" width="800" alt=""/>
                    </div>
                    <div className='container profile-div d-flex flex-column '>
                        <div className=' profile-image-div pos-absolute ab-c-b d-flex m-b-30 justify-content-center '>
                            <img className=' rounded-circle img-thumbnail' width='200' src="images/avatar.png" alt="profile image"/>
                        </div>
                        <div className='d-flex py-2 profile-name-div my-2 justify-content-center mt-4 border-bottom container'>
                            <h4 className='text-white'>{user.nom} </h4>
                            {/* <h4 className='m-l-4 p-1 text-white badge badge-success'>{user.nom} </h4>  */}
                        </div>
                       
                        <div className='d-flex profile-button-div py-2 my-2 justify-content-center'>
                            <button className='btn btn-secondary'>Modifier profil</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex pt-5 profile-content-div justify-content-around align-self-center col-sm-9">
                <APropos/>
                <div className='d-flex col-sm-9 flex-column'>
                    <SearchBar/>
                    {
                        Posts.map(post=>(   
                            <Post key={post.id} postModel={post} />
                    ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Profile;
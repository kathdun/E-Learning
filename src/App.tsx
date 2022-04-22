import React,{FunctionComponent} from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import login from './pages/login';
import post from './pages/posts';
import CreatePost from './pages/createPost';
import notFound from './pages/notFound';
import profile from './pages/profile';
import PostDetails from './pages/postDetails';
// import PrivateRoute from './privateRoute';



const App: FunctionComponent=()=>{
    
  
    return(
        <div>
            <Router>
                <nav className="nav justify-content-between bgdark p-3 border-bottom border-secondary d-none d-sm-flex">
                    <div className="d-flex flex-row col-md-6 p-2 m-l-50">
                            <Link to='/Home' className="nav-link rounded-circle " >
                                <img   src="images/logo.svg" width="40" alt="logo" />
                            </Link>
                            <input className="form-control w-50 bo-rad-23 align-self-center" placeholder="Rechercher" type="text"/>
                    </div>
                        <Link to='/profile' className="pt-2">
                            <img className='img-thumbnail ali rounded-circle' src="/images/avatar.png" width='50' alt="profile"/> 
                        </Link>
                </nav>
                <nav className="nav justify-content-between text-light p-1  d-sm-none d-xs-flex bgblack p-3 border-bottom border-secondary">
                    <Link to='/Home' className="nav-link rounded-circle" href="#">
                        <img src="images/logo.svg" width="25" alt="logo" />
                    </Link>
                    <Link to='/profile' className="pt-2">
                        <i className="fas fa-th-list align-self-center" aria-hidden="true"></i>
                    </Link>
                </nav>
                <Switch>
                    <Route exact path="/" component={login}/>
                    <Route exact path="/login" component={login}/>
                    <Route exact path="/home" component={post}/>
                    <Route exact path="/profile" component={profile}/>
                    <Route exact path="/create_post" component={CreatePost}/>
                    <Route  path="/post/:id" component={PostDetails}/>
                    <Route component={notFound}/>
                </Switch>
            </Router>
           
        </div>
    );
}


export default App;
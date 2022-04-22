import React,{FunctionComponent} from 'react';

const sideNavigation : FunctionComponent=()=>{

    return(
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
            </div>
    );
}

    export default sideNavigation;
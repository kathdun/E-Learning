import React,{FunctionComponent} from 'react';

const notFound: FunctionComponent=()=>{
    return(
        <div className="notFound-div d-flex flex-column justify-content-center align-items-center m-t-80 text-white">
            <img src="images/logo.svg" width="250" alt=""/><br/>
            <h4 className="display-3 display-sm-5">Error 404 : Page Indisponible</h4>
        </div>
    );
}

export default notFound;
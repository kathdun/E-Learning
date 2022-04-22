import React,{FunctionComponent} from 'react';

const searchBar : FunctionComponent=() => {

    return(
        <div className="container rounded bgdark my-3">
            <div className=" p-b-20 pt-5  border-bottom border-secondary">
                <input className=" form-control w-100 bo-rad-23 " type="text" placeholder="Quelque chose a dire?"/>
            </div>
            <div className="text-secondary p-3">
                <p>
                    <span className="pr-3">Video</span>  
                    <span>Photo</span>
                </p>
            </div>
        </div>
    );
}
export default searchBar;
import React, {FunctionComponent} from 'react'


type Props={
    display?:string
}

const Reponse:FunctionComponent<Props>=({display="d-none"})=>{
    
    return(
        <div className={display} >
            <div className=" border bo-rad-10 bg-light text-secondary">
                <h6 className='m-2 px-2 pt-3 initialsm text-primary '><span className="mr-3"><i className="fa fa-arrow-circle-right" aria-hidden="true"></i></span> Njiki Nana</h6>
                <small className=" p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique perspiciatis nulla omnis quo, excepturi aliquam minima quidem dolorum nam? Labore ipsum repellat quis natus, rem beatae dolore dicta est ipsam.</small>
            </div>
           
        </div>
    );
}

export default Reponse;
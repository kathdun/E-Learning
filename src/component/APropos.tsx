import React, {FunctionComponent} from 'react';

const APropos: FunctionComponent=() =>{
    return(
        <div className='bgdark text-light mr-3 h-25 col-md-3 bo-rad-23 p-4 d-none d-md-flex flex-column'>
            <h4 className='text-white'>A Propos</h4>
            <p>Etudiant en 3IL</p>
            <p>Niveau 4</p>
            <p>Cycle Ingenieur</p>
            <p>Rejoint le 21 Mars 2021</p>
            <button className='btn btn-secondary '>Modifier Info</button>
        </div>
    );
}

export default APropos;
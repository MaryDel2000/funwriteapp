import React from 'react';
import Likes from './Likes';
function Novels(props) {
    const {sinopsis, titulo,genero, autor}=props;
    return (
        <div className='col-md-3'>
            <div className='card mb-3'>
                <div className='card-body'>
                    <h5 className='card-title'>{titulo}</h5>
                    <p className="card-text">{sinopsis}</p>
                    <p className="card-text">{genero}</p>
                    <p className="card-Autor"><small className="text-Ruted">{autor}</small></p>
                    <Likes likes="0" dislikes="0" />
                </div>
            </div>
        </div>
    );
}

export default Novels;
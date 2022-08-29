import './Title.css';
import React from 'react';

export const Title = ({greeting}) => {
    return(
    <div className='d-flex justify-content-center'>
        <h1>{greeting}</h1>
    </div>
    )
   
}

export default Title;
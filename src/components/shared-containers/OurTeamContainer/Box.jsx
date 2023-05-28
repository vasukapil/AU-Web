import React from 'react';
import './Box.css'

const Box = ({data}) => {
    return (
        <div className='box'>
            <div className='box_img'>
            <img src={data?.img} alt=''/>
            </div>
           <div className='divBox'> 
            <h4>{data?.name}</h4>
            <p>Senior Accountant</p>
            </div>
        </div>
    )
}

export default Box
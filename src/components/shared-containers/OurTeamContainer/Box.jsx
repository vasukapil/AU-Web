import React from 'react';
import './Box.css'

const Box = ({data}) => {
    return (
        <div className='box'>
            <div className='box_img'>
            <img src={data?.img} alt=''/>
            </div>
           <div className='divBox flex flex-col justify-center items-center'> 
            <p className='mt-0'>{data?.name}</p>
            <p className='mt-0'>Senior Accountant</p>
            </div>
        </div>
    )
}

export default Box
import React from 'react'

let Blogs = (props) => {
    return (
    <div className='blogBox'>
        <h3 className='title'>{props.title}</h3>
        <h4 className='subTitle'>{props.subTitle}</h4>
        <h5 className='author'>{props.author}</h5>
        <h6 className='date'>{props.date}</h6>
    </div>
)}

export default Blogs
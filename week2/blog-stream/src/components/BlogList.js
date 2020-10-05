import React from 'react'

import Blogs from './Blogs'
import blogPost from '../blogPost'

const BlogList = () => {
    const blogComponents = blogPost.map(blogs => <Blogs title={blogs.title} subTitle={blogs.subTitle} author={blogs.author} date={blogs.date}/>)

    return (
        <div className='blogListBox'>
            {blogComponents}
            <div className='button'>
                <button >View Older Posts</button>
            </div>
        </div>
    )
}

export default BlogList
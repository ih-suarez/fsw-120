import React from 'react'

import Header from './components/Header'
import BlogList from './components/BlogList'
import Footer from './components/Footer'

import './components/blogs.css'

const MyBlog = () => {
    return (
        <div className='blogContainer'>
            <Header /> 
            <BlogList />
            <Footer />
        </div>
    )
}


export default MyBlog 
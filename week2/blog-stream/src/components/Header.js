import React from 'react'
import Navbar from './Navbar'

const Header = () => 
    <div className='headerBox'>
        <div className='headerStyle'>
            <Navbar />
            <h1 className='blogHead'>Clean Blog</h1>
            <h4 className='devName'>By Ismael</h4>
        </div>
    </div>


export default Header
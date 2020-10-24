import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => 
    <nav className='nav'>
        <Link className='link' to='/Home'>Home</Link>
        <Link className='link' to='/Service'>Services</Link>
        <Link className='link' to='/About'>About Us</Link>
    </nav>

export default NavBar
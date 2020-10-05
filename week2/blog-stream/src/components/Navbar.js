import React from 'react'

const Navbar = () => 
    <nav className='navContainer'>
            <div className='navOptions'>
                <span className="myBlog">My Blog</span>
                <ul className='listStyle'>
                    <li>
                        <a className='home' href='#'>Home </a>
                    </li>
                    <li>
                        <a className='contact' href='#'>Contact</a>
                    </li>
                    <li>
                        <a className='blog' href='#'>Blog</a>
                    </li>
                </ul>
            </div>
    </nav>


export default Navbar
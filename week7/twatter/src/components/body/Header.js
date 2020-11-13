import React from 'react'

import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faHashtag, faHome, faBell, faEnvelope, faBookmark, faStream, faEllipsisH} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import ProfilePic from '/Users/spawn/bryan-university/fsw-120/week7/twatter/src/components/images/57488759408__84374FEB-2F00-428B-8D17-482428CDB504.jpeg'


const Header = (props) => 
    <div className='twitterHeader'>
        <div className='headerContainer'>
            <div className='twitterIcon'> 
                <a href='#' ><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
            <div className='home'>
                <a href='#' ><FontAwesomeIcon icon={faHome} /></a> <span>Home</span>
            </div>
            <div className='hashtag'>  
                <a href='#'><FontAwesomeIcon icon={faHashtag} /></a> <span>Explore</span>
            </div>
            <div className='notifications'>
                <a href='#' ><FontAwesomeIcon icon={faBell} /></a> <span>Notifications</span>
            </div>
            <div className='messages'>
                <a href='#' ><FontAwesomeIcon icon={faEnvelope} /> </a><span>Messages</span>
            </div>
            <div className='bookmark'>
                <a href='#' ><FontAwesomeIcon icon={faBookmark} /></a> <span>Bookmark</span>
            </div>
            <div className='lists'>
                <a href='#' ><FontAwesomeIcon icon={faStream} /> </a><span>Lists</span>
            </div>
            <div className='profile'>
                <img className='profilePicture' src={ProfilePic} alt='Profile'/> <span>Profile</span>
            </div>
            <div className='more'>
                <a href='#'><FontAwesomeIcon icon={faEllipsisH} /></a> <span>More</span>
            </div>
            <div className='tweetButton'>
                <button className='tweetFormButton headerButtonWidth' onClick={props.HandleTweet}>Tweet</button>
            </div>
        </div>
    </div>

export default Header
import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faRetweet, faShareSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

const Tweet = (props) => 
    <div className='tweetOutput'>
        <div className='tweetHeadLine'>
            <img className='profilePicture tweetPicture' src={props.picture} alt='Profile' />
        </div>
        <div className='tweetContent'>
            <div className='userDisplay'> 
                <div className='userName'>
                    <div>
                        <h3 className='name'>{props.name}</h3>
                    </div>
                    <div className='nameUser'>
                        <h4 className='name atName'> @{props.userName} </h4>
                    </div>
                </div>
                <div>
                    <button className='options name' id={props.id} key={props.id} onClick={props.deleteTweet}><FontAwesomeIcon icon={faTrash} /></button>
                </div>
            </div>
            <div className='tweetsDisplayed'>
                <div>
                    <h3 className='tweetInput'>{props.tweet}</h3>
                </div>
                <div className='interactions'>
                    <span id={props.id}><FontAwesomeIcon icon={faComment}/></span> <span><FontAwesomeIcon icon={faRetweet}/></span> <span><FontAwesomeIcon icon={faHeart}/></span> <span><FontAwesomeIcon icon={faShareSquare}/></span>
                </div>
            </div>
        </div> 
    </div>

export default Tweet
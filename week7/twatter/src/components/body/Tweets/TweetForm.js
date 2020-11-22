import React, { useState } from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGift, faImage, faProjectDiagram, faSmile } from '@fortawesome/free-solid-svg-icons'

import ProfilePic from '/Users/spawn/bryan-university/fsw-120/week7/twatter/src/components/images/57488759408__84374FEB-2F00-428B-8D17-482428CDB504.jpeg'

const TweetForm = (props) => {
    const [tweetInput, setTweetInput] = useState('')
    const [tweetKey, setTweetKey] = useState(0)

    const handleChange = (e) => setTweetInput(e.target.value)


    const handleTweet = (e) => {
        e.preventDefault()

        const tweetOutput = {
            id: tweetKey,
            tweet: tweetInput
        }
        setTweetInput('')
        setTweetKey(tweetKey+1)
        props.setTweets(prevState => [tweetOutput, ...prevState])
    }
    // prevState => [tweetOutput, ...prevState]

    return (
        <div className='formContainer'>
            <form className='tForm' onSubmit={handleTweet}>
                <img className='profilePicture tweetPicture' src={ProfilePic} alt='Profile' />
                <div className='formInputs'>
                    <textarea 
                        className='tweetInput' 
                        name='tweet' 
                        onChange={handleChange}
                        value={tweetInput} 
                        placeholder={`What's Happening?`}>
                    </textarea>
                    <div className='tweetButtons'>
                        <div className='formIcons'> 
                            <FontAwesomeIcon icon={faImage} />
                            <FontAwesomeIcon icon={faGift} />
                            <FontAwesomeIcon icon={faProjectDiagram} />
                            <FontAwesomeIcon icon={faSmile} />
                        </div>
                        <button className='tweetFormButton'>Tweet</button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default TweetForm
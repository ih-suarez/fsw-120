import React, {useState, useEffect} from 'react'

import _ from '../../../../node_modules/lodash'

import TweetForm from './TweetForm'
import TweetsHeader from './TweetsHeader'
import Tweet from './Tweet'
import TwitterFeed from './TwitterFeed'


import ProfilePic from '/Users/spawn/bryan-university/fsw-120/week7/twatter/src/components/images/57488759408__84374FEB-2F00-428B-8D17-482428CDB504.jpeg'


const TweetsApp = (props) => {
    const [tweets, setTweets] = useState([])

    const deleteTweet = (id) => {
        console.log('tweet id', id) 

        tweets.forEach(i => {
            console.log('tweet index', i)

            let newCurrentTweets = tweets

            if(i.id === id){

                _.remove(newCurrentTweets, i)

                console.log(newCurrentTweets)
                
                setTweets(newCurrentTweets)
            }
        })

    
        // _.map(tweets, (tweetItem, i) => {
        //     // if (tweetItem.tweet === tweet) {
        //     //     console.log(tweets.indexOf(tweetItem))
        //     //     indexOfDelete = tweets.indexOf(tweetItem)
        //     // }
        // let newCurrentTweets = tweets;

        // newCurrentTweets.splice(i, 1)
        
        // setTweets(prevState => prevState.splice(newCurrentTweets, 1))
        // })
    }
    

    const tweetsData = _.map(tweets, tweetItem => {
        console.log(tweetItem)
        return(
            <Tweet key={tweetItem.id} name='Hector Suarez' userName='suarezHector' id={tweetItem.id} picture={ProfilePic}  tweet={tweetItem.tweet} deleteTweet={deleteTweet} />
        )
    })

    return (
        <div className='displayedTweets'>
        <TweetsHeader />
        <div id='tweets'> 
            <TweetForm setTweets={setTweets} />
            <div>
                {tweetsData}
                <Tweet name='Spawn' userName='SpawnAgainNoob' picture='https://images.unsplash.com/photo-1597572799720-75ffaed70fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80' tweet='Having a great time in Puerto Rico'/>
                <Tweet name='Ashely' userName='AshelyBububle' picture='https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80' tweet='This election is crazy'/>
                <Tweet name='Justine' userName='NoobToob' picture='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' tweet='Having a great time in Puerto Rico'/>
            </div>
        </div>
    </div>
    )
}



export default TweetsApp
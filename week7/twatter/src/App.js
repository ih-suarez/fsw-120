import React from 'react'

import Header from './components/body/Header'
import Tweets from './components/body/Tweets/TweetsApp'
import SearchBar from './components/sideContent/Search'
import NewToTwitter from './components/sideContent/NewToTwitter'
import YouMightLike from './components/sideContent/YouMightLike'
import WhatIsHappening from './components/sideContent/WhatIsHappening'
import Footer from './components/sideContent/Footer'

import './components/styles.css'

const App = () => 
    <div className='tweetPage'>
        <Header />
        <Tweets />
        <SearchBar />
        <div className='twitterContent'>
            <NewToTwitter />
            <YouMightLike />
            <WhatIsHappening />
            <Footer />
        </div>
    </div>

export default App
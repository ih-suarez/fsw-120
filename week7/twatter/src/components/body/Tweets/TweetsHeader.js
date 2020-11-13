import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHandSparkles } from '@fortawesome/free-solid-svg-icons'

const TweetsHeader = () => 
    <div className='tweetsHeader'>
        <h2 className='pageLocation'>Home</h2>
        <FontAwesomeIcon icon={faHandSparkles} />
    </div>

export default TweetsHeader
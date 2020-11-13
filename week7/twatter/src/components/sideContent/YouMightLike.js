import React from 'react'

const YouMightLike = () => 
    <div className='mightLike'>
        <div className='sideContenetImages'>
            <img className='sideImages imageOne' src='https://images.unsplash.com/photo-1535402803947-a950d5f7ae4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1127&q=80' alt='sky view'/>
            <img className='sideImages' src='https://images.unsplash.com/photo-1601946753062-25743b5e975b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1612&q=80' alt='vote'/>
            <img className='sideImages imageThree' src='https://images.unsplash.com/photo-1590962677235-26b1195bb96e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80' alt='broken glass'/>
            <img className='sideImages imageFour' src='https://images.unsplash.com/photo-1549802569-caca82cf48ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=595&q=80' alt='police'/>
            <img className='sideImages' src='https://images.unsplash.com/photo-1534988333262-c455b9332e52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1566&q=80' alt='building design'/>
            <img className='sideImages imageSix' src='https://images.unsplash.com/photo-1598519308760-ea03e7d45e4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' alt='election fraud'/>
        </div>
        <div className='suggestionBox'>
            <h2 className='suggestionHeader'>You might like </h2>
            <div className='suggestions'>
                <div className='content'>
                    <h4 className='image'>image</h4>
                    <div className='suggestionName'>
                        <div> 
                            <h5 className='name'> name</h5>
                            <h6 className='user'>@</h6>
                        </div>
                    </div>
                    <button className='followButton'>Follow</button>
                </div>
                <div className='content'>
                    <h4 className='image'>image</h4>
                    <div className='suggestionName'>
                        <div> 
                            <h5 className='name'> name</h5>
                            <h6 className='user'>@</h6>
                        </div>
                    </div>
                    <button className='followButton'>Follow</button>
                </div>
                <div className='content'>
                    <h4 className='image'>image</h4>
                    <div className='suggestionName'>
                        <div> 
                            <h5 className='name'> name</h5>
                            <h6 className='user'>@</h6>
                        </div>
                    </div>
                    <button className='followButton'>Follow</button>
                    </div>
                </div>
                <div>
                    <h4>Show More</h4>
                </div>
        </div>
    </div>

export default YouMightLike
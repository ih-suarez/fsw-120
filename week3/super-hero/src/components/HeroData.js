import React from '../../node_modules/react';

let HeroData = (props) => {
    let HeroPhrase = () => {
        alert(`Name: ${props.name} 
Hero Catchphrase: ${props.catchPhrase}`)
    }
    return (
        <div className='heroData' onClick={HeroPhrase}>
            <img className='heroImage' src={props.imageName} alt='heros'/>
            <div className='ShowAndName'>
                <h1 className='heroName'>{props.name}</h1>
                <h5 className='heroShow'>{props.show}</h5>
            </div>
        </div>
    )
}

export default HeroData

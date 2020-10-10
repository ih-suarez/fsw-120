import React, {Component} from 'react';
import _ from 'lodash';

import superHeroData from './components/superHeroData.json'
import HeroData from './components/HeroData';
import './components/styles.css'

class TheHeros extends Component {
    state = {
        heroList: superHeroData
    }
    render() { 
        return (
            <div>
                <header className='header'>The Heros Of Bryan</header>
                <div className='heroPosts'>
                    {_.map(this.state.heroList, (HeroInfo)  => {
                            return (
                                <HeroData imageName={HeroInfo.imageName}name={HeroInfo.name} show={HeroInfo.show} catchPhrase={HeroInfo.catchPhrase} />
                            )
                        }
                    )
                }
                </div>
            </div>
            
        );
    }
}

export default TheHeros;
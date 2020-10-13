import React, {Component} from 'react';
import _ from '../node_modules/lodash';

import './components/styles.css';
import MixingBoard from './components/MixingBoard';


class DJ extends Component {
    state = { 
        djColors: ['white', 'white', 'white', 'white']
    }
    
    render() {
        const lights = _.map(this.state.djColors, coloredLights => <MixingBoard color={coloredLights}/>)

        const  blackAndWhite = () => {
            if(_.head(this.state.djColors) !== 'white'){
            this.setState({djColors: ['white', 'white', 'white', 'white']})
        } else if(_.head(this.state.djColors) === 'white'){
            this.setState({djColors: ['black', 'black', 'black', 'black']})
        }

        } 
        return (
            <div>
                <div className='djLights'>
                    {lights}
                </div>
            
            <br/>
            
                <div className='djBoard'>
                    <button onClick={blackAndWhite}> Black and White</button>

                    <button onClick={() => this.setState({djColors: ['purple', 'purple', 'white', 'white']})}>Top To Purple</button>

                    <button onClick={() => this.setState({djColors: ['purple', 'purple', 'dodgerblue', 'white']})}>Bottom Left To Blue</button>

                    <button onClick={() => this.setState({djColors: ['purple', 'purple', 'white', 'blue']})}>Bottom Right To Blue</button>
                </div>
                <div className='moreDjButtons'>
                    <button onClick={() => this.setState({djColors: ['tomato', 'white', 'white', 'white']})}>Top Left To Tomato</button>

                    <button onClick={() => this.setState({djColors: ['white', 'deeppink', 'white', 'white']})}>Top Right To Pink</button>

                    <button onClick={() => this.setState({djColors: ['white', 'white', 'Chartreuse', 'white']})}>Bottom Left To What?!</button>

                    <button onClick={() => this.setState({djColors: ['white', 'white', 'white', 'darkred']})}>Bottom Right To Red</button>
                </div>
            </div>
        )
    }
}

export default DJ
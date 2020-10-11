
import React, {Component} from 'react';
import _ from '../node_modules/lodash';

import DieDisplay from './components/DieDisplay'

class Dice extends Component {
    state = { 
        dieOne: 0,
        dieTwo: 0,
        dieThree: 0,
        dieFour: 0,
        dieFive: 0,
            dieSelected: [],
            dieResetsIn: 3
        
    }

    KeepDie = (die) => {
        let dieArray = _.concat(this.state.dieSelected, die)
            this.setState({dieSelected: dieArray})
    }
    DieRoll = () => {
        const rollDice = () => _.random(1, 6) 
        const diceReset = this.state.dieResetsIn
            if(this.state.dieResetsIn < 1) {
                this.setState({
                    dieOne: 0,
                    dieTwo: 0,
                    dieThree: 0,
                    dieFour: 0,
                    dieFive: 0,
                        dieSelected: [],
                        dieResetsIn: 3
                })
            } else {
                
                // const selected = _.forEach(die => {
            //         switch(!_.includes(die.state.dieSelected)) {
            //             case 'Die One':
            //                 this.setState({dieOne: rollDice()})
            //                 break;
            //             case 'Die Two':
            //                 this.setState({dieTwo: rollDice()})
            //                 break;
            //             case 'Die Three':
            //                 this.setState({dieThree: rollDice()})
            //                 break;
            //             case 'Die Four':
            //                 this.setState({dieFour: rollDice()})
            //                 break;
            //             case 'Die Five':
            //                 this.setState({dieFive: rollDice()})
            //                 break;
            //             default:
            //                 console.error('error')
            //                 break;
            //         } 
                    
            //         return (<DieDisplay state={this.state} itemSelected={this.KeepDie} />
            //         )
            // })}}

                
                if(!_.includes(this.state.dieSelected, 'Die One')) 
                    {this.setState({dieOne: rollDice()})}
                if(!_.includes(this.state.dieSelected, 'Die Two')) 
                    {this.setState({dieTwo: rollDice()})}
                if(!_.includes(this.state.dieSelected, 'Die Three')) 
                    {this.setState({dieThree: rollDice()})}
                if(!_.includes(this.state.dieSelected,  'Die Four')) 
                    {this.setState({dieFour: rollDice()})}
                if(!_.includes(this.state.dieSelected, 'Die Five')) 
                    {this.setState({dieFive: rollDice()})
                this.setState({dieResetsIn: diceReset - 1})
            }
        }
    }

    

    render() { 
        return (
            <div className='dieContainer'>
                <DieDisplay state={this.state} itemSelected={this.KeepDie}/>
                <h3>Die Resets in ... {this.state.dieResetsIn}</h3>
                <button onClick={this.DieRoll}>Roll The Dice</button>
            </div>
        );
    }
}

export default Dice;
import React, {Component} from 'react';
import _ from '../node_modules/lodash';

import './components/styles.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            fullName: '',
            inputNames: []
        }
        this.handleChange = _.bind(this.handleChange, this)
        this.formSubmission = _.bind(this.formSubmission, this)
    }

    handleChange(e) {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    formSubmission(e) {
        e.preventDefault()
        let submissions = this.state.inputNames
        submissions.push(this.state.fullName)
        this.setState({
            inputNames: submissions
        })
    }

    render() { 
        const listedName = _.map(this.state.inputNames, input => <li>{input}</li>)
        return (
        <div className='container'>
            <div className='inputContainer'>
                <form className='form' onSubmit={this.formSubmission}>
                    <h1>Enter Full Name</h1>
                    <input name='fullName' value={this.state.fullName} type='text' placeholder='Full Name' onChange={this.handleChange}/>
                    <span><button>Submit</button></span>
                    <br />
                    <h1>{this.state.fullName}</h1>
                    
                </form>
                <h4>Name Entries</h4>
                <ul className='list'>
                    {listedName}
                </ul>
            </div>
        </div>
        )
    }
}

export default App;
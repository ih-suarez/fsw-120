import React, {Component} from 'react'
import _ from '../node_modules/lodash'

import './components/styles.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            placeOfBirth: '',
            phone: '',
            favoriteFood: '',
            interests: '',
            badges: []
        }
        this.handleChange = _.bind(this.handleChange, this)
        this.handleSubmit = _.bind(this.handleSubmit, this)
    }
    handleChange(e) {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        _.forEach(_.toPairs(Object, this.state), ([key, value]) => {
            if(value.length < 3 || value === '') {
                alert(`Missing or invalid fields`)
            }
        })
        const badgeContainer = document.getElementById('badgeContainer')
        const badge = 
        `<div class="output">
            <h3>Badge:</h3>
            <div class="badge">
                <p> Name: ${this.state.firstName} ${this.state.lastName}</p>
                <p> Email: ${this.state.email}</p>
                <p> Place Of Birth: ${this.state.placeOfBirth}</p>
                <p> Phone Number: ${this.state.phone}</p>
                <p> Favorite Food: ${this.state.favoriteFood}</p>
                <p class="textArea"> About You: ${this.state.interests}</p>
            </div>
            
        </div>` 
        this.state.badges.push(badge)
        badgeContainer.innerHTML = badge
        console.log(this.state.badges)
    }
    render() { 
        return (
            <main className='main'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <input 
                        name='firstName'
                        value={this.state.firstName}
                        type='text'
                        onChange={this.handleChange}
                        placeholder='First Name'
                    />
                    <br />
                    <input 
                        name='lastName'
                        value={this.state.lastName}
                        type='text'
                        onChange={this.handleChange}
                        placeholder='Last Name'
                    />
                    <br />
                    <input 
                        name='email'
                        value={this.state.email}
                        type='email'
                        onChange={this.handleChange}
                        placeholder='Email'
                    />
                    <br />
                    <input 
                        name='placeOfBirth'
                        value={this.state.placeOfBirth}
                        type='text'
                        onChange={this.handleChange}
                        placeholder='Place Of Birth'
                    />
                    <br />
                    <input 
                        name='phone'
                        value={this.state.phone}
                        type='tel'
                        onChange={this.handleChange}
                        placeholder='Phone Number'
                    />
                    <br />
                    <input 
                        name='favoriteFood'
                        value={this.state.favoriteFood}
                        type='text'
                        onChange={this.handleChange}
                        placeholder='Favorite Food'
                    />
                    <br />
                    <textarea
                            name='interests'
                            value={this.state.interests}
                            type='text'
                            onChange={this.handleChange}
                            placeholder='Tell Us About Yourself'
                    >
                    </textarea>
                    <br />
                    <div className='button'>
                        <button>Submit Badge</button>
                    </div>
                    
                </form>
        <div id='badgeContainer'>
        </div>
            </main>
        )
    }
}

export default App;
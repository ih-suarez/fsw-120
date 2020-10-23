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
    checkButton = () => {
        let isButtonDisabled = true
        for (const [key, value] of Object.entries(this.state)) {
            console.log(value)
            if(key !== 'badges' && value.length >= 3){
                isButtonDisabled = false
            }
        }
        console.log(isButtonDisabled)
        return isButtonDisabled
    }
    handleSubmit(e) {
        e.preventDefault()
        
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
                        required={true}
                        minLength={3}
                        type='text'
                        onChange={this.handleChange}
                        placeholder='First Name'
                    />
                    <br />
                    <input 
                        name='lastName'
                        value={this.state.lastName}
                        required={true}
                        minLength={3}
                        type='text'
                        onChange={this.handleChange}
                        placeholder='Last Name'
                    />
                    <br />
                    <input 
                        name='email'
                        value={this.state.email}
                        required={true}
                        minLength={3}
                        type='email'
                        onChange={this.handleChange}
                        placeholder='Email'
                    />
                    <br />
                    <input 
                        name='placeOfBirth'
                        value={this.state.placeOfBirth}
                        required={true}
                        minLength={3}
                        type='text'
                        onChange={this.handleChange}
                        placeholder='Place Of Birth'
                    />
                    <br />
                    <input 
                        name='phone'
                        value={this.state.phone}
                        required={true}
                        minLength={3}
                        type='tel'
                        pattern='[0-9]{10}'
                        onChange={this.handleChange}
                        placeholder='1233217895'
                    />
                    <br />
                    <input 
                        name='favoriteFood'
                        value={this.state.favoriteFood}
                        required={true}
                        minLength={3}
                        type='text'
                        onChange={this.handleChange}
                        placeholder='Favorite Food'
                    />
                    <br />
                    <textarea
                            name='interests'
                            value={this.state.interests}
                            required={true}
                            minLength={3}
                            type='text'
                            onChange={this.handleChange}
                            placeholder='Tell Us About Yourself'
                    >
                    </textarea>
                    <br />
                    <div className='button'>
                        <button disabled={this.checkButton()}>Submit Badge</button>
                    </div>
                </form>
        <div id='badgeContainer'></div>
            </main>
        )
    }
}

export default App;
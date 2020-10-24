import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './mainComponents/Home'
import Service from './mainComponents/Service'
import About from './mainComponents/About'

const Main = () => 
    <main className='main'>
            <Switch>
                <Route exact path='/Home'>
                    <Home />
                        </Route>
                <Route exact path='/Service'>
                    <Service />
                        </Route>
                <Route exact path='/About'>
                    <About />
                        </Route>
            </Switch>
    </main>

export default Main
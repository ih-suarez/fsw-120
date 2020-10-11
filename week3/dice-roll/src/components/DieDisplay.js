import React from 'react'
import _ from '../../node_modules/lodash'

import Die from './Die'


let DieDisplay = ({itemSelected, state}) => 
    <div>
        <Die name='Die One' state={state.dieOne} userSelected={_.includes(state.dieSelected, 'Die One')} itemSelected={itemSelected} />
        <Die name='Die Two' state={state.dieTwo} userSelected={_.includes(state.dieSelected, 'Die Two')} itemSelected={itemSelected}/>
        <Die name='Die Three' state={state.dieThree} userSelected={_.includes(state.dieSelected, 'Die Three')} itemSelected={itemSelected}/>
        <Die name='Die Four' state={state.dieFour} userSelected={_.includes(state.dieSelected, 'Die Four')} itemSelected={itemSelected}/>
        <Die name='Die Five' state={state.dieFive} userSelected={_.includes(state.dieSelected, 'Die Five')} itemSelected={itemSelected}/>
    </div>

export default DieDisplay;


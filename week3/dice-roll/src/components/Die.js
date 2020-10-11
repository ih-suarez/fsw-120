import React from 'react'

const Die = ({userSelected, itemSelected, state, name}) =>     
    <h1 onClick={() => itemSelected([name])} style={userSelected ? {backgroundColor: 'tomato'} : {backgroundColor: 'transparent'}}> 
        {name}: {state}
    </h1>

export default Die;
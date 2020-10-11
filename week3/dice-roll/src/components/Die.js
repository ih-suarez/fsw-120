import React from 'react'

const Die = ({userSelected, itemSelected, state, name}) =>     
    <h3 onClick={() => itemSelected([name])} style={userSelected ? {backgroundColor: 'tomato'} : {backgroundColor: 'transparent'}}> 
        {name}: {state}
    </h3>

export default Die;
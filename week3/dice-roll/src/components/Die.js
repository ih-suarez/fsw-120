import React from 'react'

const Die = ({userSelected, itemSelected, state, name}) =>     
    <h4 onClick={() => itemSelected([name])} style={userSelected ? {backgroundColor: 'tomato'} : {backgroundColor: 'transparent'}}> 
        {name}: {state}
    </h4>

export default Die;
import React from "react"

let Spot = (props) => {

    let howExpensive

    if(props.price <= 500){
        howExpensive = "$"
    } else if (props.price > 500 && props.price < 1000){
        howExpensive = "$$"
    } else if (props.price > 1000) {
        howExpensive = "$$$"
    }
    

    return (
        <div className="spotBox" style={{backgroundColor: `${props.timeToGoColor}`}}>
            <h3 className="spot">{props.place}</h3>
            <h4 className="price">{howExpensive += props.price}</h4>
            <p className="timeToGo">{props.timeToGo}</p>
        </div>
    )
}

export default Spot
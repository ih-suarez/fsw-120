import React from "react"

import Spot from "./components/Spot"
import vacationSpots from "./vacationSpots"
import "./components/style.css"

const Vacation = () => {
    const vacationComponent = vacationSpots.map(spots => {
        
        let timeToGoColor
        
        switch (spots.timeToGo) {
            case "Spring":
                timeToGoColor = "rgba(0, 128, 0, 0.671)"
                break;
            case "Summer":
                timeToGoColor = "rgba(255, 99, 71, 0.671)"
                break;
            case "Fall":
                timeToGoColor = " rgba(241, 136, 5, 0.671)"
                break;
            case "Winter": 
                timeToGoColor = "rgba(30, 143, 255, 0.671)"
                break;
            default:
                timeToGoColor = "rgba(136, 136, 136, 0.671)"
                break;
        }
        return ( <Spot key={spots.id} place={spots.place} price={spots.price} timeToGoColor={timeToGoColor} timeToGo={spots.timeToGo}/>
            )
    })


        return (
            <div className="mapContainer">
                {vacationComponent}
            </div>
        )
}

export default Vacation
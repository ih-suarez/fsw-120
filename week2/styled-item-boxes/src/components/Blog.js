import React from "react"

let Blog = (props) => {
    return (
        <div className="div-box">
            <h3 className="title">{props.title}</h3>
            <h4 className="subtitle">{props.subtitle} </h4>
            <p className="info">{props.information} </p>
        </div>
    )
}

export default Blog
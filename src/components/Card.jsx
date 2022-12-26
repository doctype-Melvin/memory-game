import React from "react";

export default function Card(props) {
    return (
        <div 
        className="cardContainer"
        id="card"
        onClick={props.click}>
            <h1>{props.cardName}</h1>
        </div>
    )
}
import React from "react";

export default function Card(props) {
    return (
        <div 
        className="cardContainer"
        id="card"
        name={props.cardName.toUpperCase()}
        onClick={props.click}>
            <img 
            className="cardImg" 
            src={props.img}
            name={props.cardName.toUpperCase()}
            >
            </img>
            
            <span
            name={props.cardName.toUpperCase()}
            >
            {props.cardName.toUpperCase()}
            </span>
        </div>
    )
}
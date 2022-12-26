import React from "react";
import { useState } from "react";

export default function Gameboard(props) {
    const mapper = props.cards.map((item) => <div key={item.name}>{item.name}</div>)
    return (
        <div className="gameboardContainer">
            {mapper}
        </div>
    )
}
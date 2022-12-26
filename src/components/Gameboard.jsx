import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";

export default function Gameboard(props) {
    
    
    return (
        <div className="gameboardContainer">
            {props.mapper}
        </div>
    )
}
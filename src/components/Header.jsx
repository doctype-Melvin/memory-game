import React from "react";
import { useState } from "react";

export default function Header(props) {
    
    return (
        <div className="headerContainer">
            <h2 className="title">Minecraft Memory Game</h2>
            <div className="scoreboard">
                <div className="score">Score: {props.score}</div>
                <div className="highScore">Highscore: {props.highScore}</div>
            </div>
        </div>
    )
}
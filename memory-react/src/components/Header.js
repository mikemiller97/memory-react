import React from "react"

export default function Header(props) {
    

    return (
        <div className="header">
            <div>
            <h1>Memory Game</h1>
            <p>Get points by clicking on an image but don't click on any more than once!</p>
            </div>
            <ul>
                <li>Score: {props.score}</li>
                <li>Best score: {props.bestScore}</li>
            </ul>
        </div>
    )
}
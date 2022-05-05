import React from "react"

export default function Card(props) {
    let [clicked, setClicked] = React.useState(props.clicked)

    React.useEffect(() => {
        if (props.gameLost === true) {
            setClicked(false)
        }
    }, [props.count])


    return (
        <div className="card" onClick={() => {
            if (clicked === false) {
                props.setScore((prevScore) => prevScore + 1)
                setClicked(true)
            } else {
                setClicked(false)
                props.setScore(0)
                props.setGameLost(true)
                alert("You lost")
            }
            }}>
            <img src={props.source} alt="memory"/>
            <p>{props.name}</p>
        </div>
    )
}
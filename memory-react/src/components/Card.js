import React from "react"

export default function Card(props) {
    let [clicked, setClicked] = React.useState(props.clicked)
    let [ownCount, setOwnCount] = React.useState(0)

    React.useEffect(() => {
        if (props.gameLost === true) {
            setClicked(false)
            props.setGameLost(false)
        }
    }, [props.count])


    return (
        <div className="card" onClick={() => {
            if (clicked === false) {
                props.setScore((prevScore) => prevScore + 1)
                setClicked(true)
            } else {
                props.setScore(0)
                props.setGameLost(true)
                alert("You lost")
            }
            setOwnCount((ownCount) => ownCount+1)
            }}>
            <img src={props.source} alt="memory"/>
            <p>{props.name}</p>
        </div>
    )
}
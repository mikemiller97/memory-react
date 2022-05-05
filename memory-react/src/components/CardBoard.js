import React from "react"
import Card from "./Card"
import imagesArray from "../images-array"

export default function CardBoard(props) {
    let [count, setCount] = React.useState(0);
    let [gameLost, setGameLost] = React.useState(false)
    let [clicked, setClicked] = React.useState(false)
    
    let [cardsArray, setCardsArray] = React.useState(imagesArray.images.map((_, i) => (
        <div className="card-wrapper" key={i}>
            <Card 
            source={imagesArray.images[i].src}
            name={imagesArray.images[i].name}
            id={imagesArray.images[i].id}
            clicked={false}
            score={props.score}
            bestScore={props.bestScore}
            setScore={props.setScore}
            setBestScore={props.setBestScore}
            setGameLost={setGameLost}
            gameLost={gameLost}
            count={count}
            />
        </div>)))
    
    const shuffle = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      };

    React.useEffect(() => {
        if (gameLost === true) {
            setGameLost(false)
            setCardsArray( () =>
            imagesArray.images.map((_, i) => (
                <div className="card-wrapper" key={i}>
                    <Card 
                    source={imagesArray.images[i].src}
                    name={imagesArray.images[i].name}
                    id={imagesArray.images[i].id}
                    clicked={imagesArray.images[i].clicked}
                    score={props.score}
                    bestScore={props.bestScore}
                    setScore={props.setScore}
                    setBestScore={props.setBestScore}
                    setGameLost={setGameLost}
                    gameLost={gameLost}
                    />
                </div>)))   
        }
        else {
        setCardsArray( () =>
            [...cardsArray],
            shuffle(cardsArray)
        )}
    },[count])

    return (
        <div className="card-board" onClick={() => {
            setCount(prevCount => prevCount + 1)}}>
            {cardsArray}
        </div>
    )
}
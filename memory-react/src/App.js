import Header from "./components/Header"
import React from "react"
import CardBoard from "./components/CardBoard"

function App() {
  
  let [score, setScore] = React.useState(0);
  let [bestScore, setBestScore] = React.useState(0);

  React.useEffect(() => {
    if (score > bestScore) {
      setBestScore(score)
    }
  }, [score])

  return (
    <div className="App">
      <Header
        score={score}
        bestScore={bestScore}
        setScore={setScore}
        setBestScore={setBestScore} />
      <CardBoard
        score={score}
        bestScore={bestScore}
        setScore={setScore}
        setBestScore={setBestScore} />
    </div>
  );
}

export default App;

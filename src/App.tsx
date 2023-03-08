import { useEffect, useState } from "react";
import BoardComponent from "./components/BoardComponent";
import "./styles/App.scss";
import { Board } from "./models/Board";

function App() {
  const [board, setBoard] = useState(new Board());

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  };

  useEffect(() => {
    restart();
  }, []);

  return (
    <div className="App">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;

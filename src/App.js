import React, { createContext, useState } from "react";
import Menu from "./Components/Menu";
import Quiz from "./Components/Quiz";
import Score from "./Components/Score";
import "./App.css";
export const DataContext = createContext();

export default function App() {
  const [appState, setAppState] = useState("menu");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <DataContext.Provider value={{ appState, setAppState,score,setScore }}>
        <h1>App Development Quiz</h1>
        {appState === "menu" && <Menu />}
        {appState === "quiz" && <Quiz />}
        {appState === "score" && <Score/>}
      </DataContext.Provider>
    </div>
  );
}

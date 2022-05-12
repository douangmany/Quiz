import React, { useContext } from "react";
import { DataContext } from "../App";
import QuestionData from "../data/QuestionData";

export default function Score() {
  const { score, setAppState, setScore } = useContext(DataContext);
  const restartApp = () => {
    setScore(0);
    setAppState("menu");
  };

  return (
    <div className="score">
      <h1>ສະຫຼຸບຜົນຄະແນນ</h1>
      <h2>
        {score}/{QuestionData.length}
      </h2>
      <button onClick={restartApp}>ຕອບຄຳຖາມອີກຄັ້ງ</button>
    </div>
  );
}

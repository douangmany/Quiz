import React, { useContext } from "react";
import { DataContext } from "../App";

export default function Menu() {
  const { setAppState } = useContext(DataContext);
  return (
    <div className="menu">
      <button onClick={() => setAppState("quiz")}>ຫຼິ້ນເກມຕອບຄຳຖາມ</button>
    </div>
  );
}

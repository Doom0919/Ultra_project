// VerticalSplit.jsx
import React from "react";
import "../styles/Lobby.css";

export default function Lobby() {
  return (
    <div className="split-container">
      <div className="row r1">
        <div className="c c1">C1</div>
        <div className="c c2">C2</div>
        <div className="c c3">C3</div>
        <div className="c c4">C4</div>
    </div>

      <div className="row r2">
        <div className="box">A</div>
        <div className="box">B</div>
        <div className="box">C</div>
        <div className="box">D</div>
    </div>

      <div className="row r3">
        <div className="r3-top">Top (1x)</div>

        <div className="r3-bottom">
            <div className="b b1">B1</div>
            <div className="b b2">B2</div>
            <div className="b b3">B3</div>
            <div className="b b4">B4</div>
            <div className="b b5">B5</div>
        </div>
    </div>

      <div className="row r4">
        <button className="btn">Button 1</button>
        <button className="btn">Button 2</button>
    </div>
    </div>
  );
}

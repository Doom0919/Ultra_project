// VerticalSplit.jsx
import React from "react";
import "../styles/Lobby.css";
import { FaTrophy, FaCog, FaGift, FaPlus } from "react-icons/fa";

const player = { id: 1, name: "Alex", image: "https://i.pravatar.cc/150?img=12", borderColor: "border-yellow-400", score: 1250 };

const players = [
  { id: 1, name: "Alex", image: "https://i.pravatar.cc/150?img=12", color: "#fbbf24" },
  { id: 2, name: "Jordan", image: "https://i.pravatar.cc/150?img=25", color: "#f87171" },
  { id: 3, name: "Sam", image: "https://i.pravatar.cc/150?img=33", color: "#60a5fa" },
  { id: 4, name: "Casey", image: "https://i.pravatar.cc/150?img=47", color: "#34d399" }
];

const friends = [
  { id: 1, name: "Emma", image: "https://i.pravatar.cc/150?img=5" },
  { id: 2, name: "Lucas", image: "https://i.pravatar.cc/150?img=15" },
  { id: 3, name: "Sophia", image: "https://i.pravatar.cc/150?img=22" },
  { id: 4, name: "Olivia", image: "https://i.pravatar.cc/150?img=32" },
  { id: 5, name: "Noah", image: "https://i.pravatar.cc/150?img=42" }
];

export default function Lobby() {
  return (
    <div className="split-container">
      <div className="row r1">
        <div className="c c1"><img src={player.image} alt={player.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} /></div>
        <div className="c c2" style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
          <FaTrophy style={{ color: "#fcd34d", fontSize: "24px" }} />
          <span style={{ fontSize: "20px", fontWeight: "bold" }}>{player.score}</span>
          <span style={{ fontSize: "20px", fontWeight: "bold", color: "#666" }}>+</span>
        </div> 
        <div className="c c3" style={{ cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <FaGift style={{ fontSize: "28px", color: "#ef4444" }} />
        </div>
        <div className="c c4" style={{ cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <FaCog style={{ fontSize: "28px", color: "#555" }} />
        </div>
    </div>

      <div className="row r2">
        {players.map((p) => (
          <div key={p.id} className="box" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "8px", border: `3px solid ${p.color}` }}>
            <img src={p.image} alt={p.name} style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }} />
          </div>
        ))}
    </div>

      <div className="row r3">
        <div className="r3-top">Тоглоомын найзууд</div>

        <div className="r3-bottom" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {friends.map((f) => (
              <div key={f.id} className="b" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "12px" }}>
                <img src={f.image} alt={f.name} style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }} />
                <span style={{ fontSize: "14px", fontWeight: "bold" }}>{f.name}</span>
                <FaPlus style={{ fontSize: "18px", color: "#39C639", cursor: "pointer" }} />
              </div>
            ))}
        </div>
    </div>

      <div className="row r4">
        <button className="btn">Тоглох</button>
        <button className="btn">Буцах</button>
    </div>
    </div>
  );
}

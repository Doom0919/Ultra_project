import React, { useState } from "react";
import horse from "../assets/horses/defaultHorse.png";
import playerHorse from "../assets/horses/playerhorse.png";
import "../styles/GameScreen.css";
import { Plus } from "lucide-react";
import imeel from "../assets/images/imeel.png";
import tashuur from "../assets/images/tashuur.png";
import shout from "../assets/images/shout.png";
import mori from "../assets/images/mori.png";
import temee from "../assets/images/temee.png";
import honi from "../assets/images/honi.png";
import yamaa from "../assets/images/yamaa.png";
import { motion } from "framer-motion";

const ICONS = { mori, temee, honi, yamaa };
const TYPES = ["mori", "temee", "honi", "yamaa"];

export default function GameScreen() {
  const [player1Position, setPlayer1Position] = useState(0);
  const [player2Position, setPlayer2Position] = useState(0);
  const [player3Position, setPlayer3Position] = useState(0);
  const [player4Position, setPlayer4Position] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [currentTurn, setCurrentTurn] = useState(1);
  const [isThrowing, setIsThrowing] = useState(false);
  const [result, setResult] = useState(["mori", "temee", "honi", "yamaa"]);

  const [uploadedImages, setUploadedImages] = useState({
    skill1: null,
    skill2: null,
    skill3: null,
  });

  const handleImageUpload = (skillIndex) => {
    const imageUrl = prompt("Зургийн линк оруулна уу:");
    if (imageUrl) {
      setUploadedImages((prev) => ({
        ...prev,
        [`skill${skillIndex}`]: imageUrl,
      }));
    }
  };

  const throwShagai = () => {
  if (currentTurn !== 1) return;

  setIsThrowing(true);

  setTimeout(() => {
    const arr = Array.from(
      { length: 4 },
      () => TYPES[Math.floor(Math.random() * TYPES.length)]
    );

    const countMori = arr.filter((t) => t === "mori").length;
    const countOthers = arr.length - countMori;

    const move = countOthers === 4 ? 4 : countMori;

    switch (currentTurn) {
      case 1:
        setPlayer1Position((prev) => prev + move);
        break;
      case 2:
        setPlayer2Position((prev) => prev + move);
        break;
      case 3:
        setPlayer3Position((prev) => prev + move);
        break;
      case 4:
        setPlayer4Position((prev) => prev + move);
        break;
    }

    setResult(arr);
    setIsThrowing(false);

    // Ээлжийг дараагийн тоглогч руу шилжүүлэх
    setCurrentTurn((prev) => (prev % 4) + 1);
  }, 900);
};


  const skills = [
    { id: 1, icon: tashuur, name: "Ташуур" },
    { id: 2, icon: imeel, name: "Эмээл" },
    { id: 3, icon: shout, name: "Хаших" },
  ];

  const positions = [
    { top: "100%", left: "10%", transform: "rotate(90deg)" },
    { top: "100%", left: "17.3%", transform: "rotate(90deg)" },
    { top: "100%", left: "24.6%", transform: "rotate(90deg)" },
    { top: "100%", left: "31.6%", transform: "rotate(90deg)" },
    { top: "100%", left: "38.6%", transform: "rotate(90deg)" },
    { top: "100%", left: "45.6%", transform: "rotate(80deg)" },
    { top: "99%", left: "52.6%", transform: "rotate(70deg)" },
    { top: "97%", left: "59%", transform: "rotate(60deg)" },
    { top: "95%", left: "65.5%", transform: "rotate(50deg)" },
    { top: "92%", left: "71%", transform: "rotate(10deg)" },
    { top: "87.5%", left: "72%", transform: "rotate(310deg)" },
    { top: "85.5%", left: "65.8%", transform: "rotate(270deg)" },
    { top: "85.5%", left: "58.8%", transform: "rotate(270deg)" },
    { top: "84.5%", left: "51.8%", transform: "rotate(270deg)" },
    { top: "83.5%", left: "44.8%", transform: "rotate(270deg)" },
    { top: "83.5%", left: "37.8%", transform: "rotate(270deg)" },
    { top: "83.5%", left: "30.8%", transform: "rotate(270deg)" },
    { top: "82.5%", left: "23.8%", transform: "rotate(280deg)" },
    { top: "81.5%", left: "16.8%", transform: "rotate(290deg)" },
    { top: "80.1%", left: "9.8%", transform: "rotate(290deg)" },
    { top: "78.1%", left: "3.5%", transform: "rotate(310deg)" },
    { top: "74.1%", left: "-1.2%", transform: "rotate(360deg)" },
    { top: "69.3%", left: "-0.4%", transform: "rotate(30deg)" },
    { top: "65.3%", left: "2.9%", transform: "rotate(45deg)" },
    { top: "61.8%", left: "7.8%", transform: "rotate(65deg)" },
    { top: "59.8%", left: "14.7%", transform: "rotate(70deg)" },
    { top: "58.3%", left: "21.8%", transform: "rotate(75deg)" },
    { top: "56.8%", left: "28.8%", transform: "rotate(85deg)" },
    { top: "56.3%", left: "36.3%", transform: "rotate(90deg)" },
    { top: "56.3%", left: "43.8%", transform: "rotate(95deg)" },
    { top: "56.3%", left: "51.3%", transform: "rotate(100deg)" },
    { top: "56.3%", left: "58.8%", transform: "rotate(80deg)" },
    { top: "55.8%", left: "66.3%", transform: "rotate(45deg)" },
    { top: "52.8%", left: "72.3%", transform: "rotate(20deg)" },
    { top: "48.3%", left: "75.3%", transform: "rotate(350deg)" },
    { top: "43.8%", left: "73.3%", transform: "rotate(300deg)" },
    { top: "41.3%", left: "66.8%", transform: "rotate(290deg)" },
    { top: "40.3%", left: "59.3%", transform: "rotate(280deg)" },
    { top: "39.8%", left: "51.8%", transform: "rotate(270deg)" },
    { top: "39.3%", left: "44.3%", transform: "rotate(275deg)" },
    { top: "38.3%", left: "36.8%", transform: "rotate(280deg)" },
    { top: "37.3%", left: "29.3%", transform: "rotate(290deg)" },
    { top: "35.3%", left: "22.3%", transform: "rotate(300deg)" },
    { top: "32.3%", left: "16.3%", transform: "rotate(310deg)" },
    { top: "28.3%", left: "11.8%", transform: "rotate(340deg)" },
    { top: "23.3%", left: "10.8%", transform: "rotate(20deg)" },
    { top: "18.8%", left: "13.8%", transform: "rotate(40deg)" },
    { top: "15.3%", left: "19.8%", transform: "rotate(80deg)" },
    { top: "15.3%", left: "27.8%", transform: "rotate(90deg)" },
    { top: "15.3%", left: "35.8%", transform: "rotate(110deg)" },
    { top: "16.3%", left: "43.3%", transform: "rotate(110deg)" },
    { top: "18.3%", left: "50.8%", transform: "rotate(90deg)" },
    { top: "18.8%", left: "58.8%", transform: "rotate(70deg)" },
    { top: "17.3%", left: "66.3%", transform: "rotate(50deg)" },
    { top: "13.3%", left: "72.3%", transform: "rotate(30deg)" },
  ];

  const profiles = [
    {
      id: 1,
      name: "Т",
      image: "https://i.pravatar.cc/150?img=12",
      borderColor: "border-yellow-400",
    },
    {
      id: 2,
      name: "Тоглогч 2",
      image: "https://i.pravatar.cc/150?img=45",
      borderColor: "border-red-500",
    },
    {
      id: 3,
      name: "Тоглогч 3",
      image: "https://i.pravatar.cc/150?img=47",
      borderColor: "border-blue-500",
    },
    {
      id: 4,
      name: "Тоглогч 4",
      image: "https://i.pravatar.cc/150?img=33",
      borderColor: "border-green-600",
    },
  ];

  return (
    <div className="game-screen">
      {/* Header + Profiles */}
      <div className="header">
        <div className="profiles">
          {profiles.map((profile) => (
            <div key={profile.id} className="profile">
              <div
                className={`w-20 h-20 rounded-full border-4 ${
                  currentTurn === profile.id
                    ? "border-green-500"
                    : profile.borderColor
                } overflow-hidden bg-white`}
                style={{
                  boxShadow:
                    currentTurn === profile.id
                      ? "0 0 20px rgba(34, 197, 94, 0.6)"
                      : "none",
                  transition: "all 0.3s ease",
                }}
              >
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "4px",
                  fontSize: "0.75rem",
                  color: currentTurn === profile.id ? "#22c55e" : "#94a3b8",
                  fontWeight: currentTurn === profile.id ? "bold" : "normal",
                }}
              >
                {profile.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Game Area */}
      <div className="game-main">
        <div className="board">
          {positions.map((pos, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                top: pos.top,
                left: pos.left,
                transform: pos.transform,
                transition: "top 0.5s, left 0.5s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="left">
                  {player1Position === index && (<img
                      src={playerHorse}
                      alt="Player Horse"
                      style={{ width: "20px", height: "30px" }}
                    />)}
                    {player2Position === index && (<img 
                        src={playerHorse}
                        alt="Player Horse"
                        style={{ width: "20px", height: "30px" }}
                    />)}
                </div>
                <img
                  src={horse}
                  alt="Horse"
                  style={{ width: "80px", height: "auto" }}
                />
                <div className="right">
                  {player3Position === index && (<img
                      src={playerHorse}
                      alt="Player Horse"
                      style={{ width: "20px", height: "30px" }}
                    />)}
                    {player4Position === index && (<img 
                        src={playerHorse}
                        alt="Player Horse"
                        style={{ width: "20px", height: "30px" }}
                    />)}
                </div>
              </div>
            </div>
          ))}
        </div>
  
         <div
          style={{
            position: "absolute",
            top: "70%",
            left: "70%",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            
          }}
          className="dewsger"
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 3,
              justifyItems: "center",
              alignItems: "center",
              maxWidth: 40,
              maxHeight: 40,
              padding: 20,
              borderRadius: 12,
              background: "rgba(255, 255, 255, 0.9)",
              boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
            }}
            
          >
            {result.map((type, index) => (
             <motion.img
                        key={index}
                        src={ICONS[type]}
                        style={{width: 30,
                  height: "auto",
                  objectFit: "contain",
                  position : "relative",
                  top: "-12px",
                  right: "8px", }}
                        initial={{ y: 0, rotate: 0, opacity: 1 }}
                        animate={
                            isThrowing
                            ? { y: -50, rotate: 1090, opacity: 0.7 }
                            : { y: 0, rotate: 0, opacity: 1 }
                        }
                        transition={{ duration:0.9 }}
                        />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div
          style={{
            borderRadius: "1rem",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            padding: "0rem 2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.5rem",
            }}
          >
            {/* Skills Section */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              {skills.map((skill) => (
                <div key={skill.id} style={{ position: "relative" }}>
                  <div
                    onClick={() => handleImageUpload(skill.id)}
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "9999px",
                      background: "white",
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.3s",
                      border:
                        selectedSkill === skill.id
                          ? "4px solid rgb(250, 204, 21)"
                          : "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.1)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    {uploadedImages[`skill${skill.id}`] ? (
                      <img
                        src={uploadedImages[`skill${skill.id}`]}
                        alt={skill.name}
                        style={{
                          width: "3rem",
                          height: "3rem",
                          objectFit: "cover",
                          borderRadius: "9999px",
                          border: "black 1px solid",
                        }}
                      />
                    ) : (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        style={{
                          width: "2rem",
                          height: "2rem",
                          objectFit: "contain",
                        }}
                      />
                    )}

                    <div
                      style={{
                        position: "absolute",
                        top: "-1rem",
                        right: "-1rem",
                        background: "transparent",
                        borderRadius: "9999px",
                        padding: "0.25rem",
                      }}
                    >
                      <Plus
                        style={{
                          width: "2rem",
                          height: "2rem",
                          color: "rgb(250, 204, 21)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Turn Indicator - Шидэх товч */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ color: "white", fontWeight: "600" }}>
                <p style={{ fontSize: "0.875rem", opacity: 0.9 }}>
                  {currentTurn === 1
                    ? "Таны ээлж"
                    : `Тоглогч ${currentTurn}-н ээлж`}
                </p>
              </div>
              <div
                onClick={throwShagai}
                style={{
                  width: "6rem",
                  height: "6rem",
                  borderRadius: "9999px",
                  background:
                    currentTurn === 1 ? "rgb(34, 197, 94)" : "rgb(239, 68, 68)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: currentTurn === 1 ? "pointer" : "not-allowed",
                  opacity: currentTurn === 1 ? 1 : 0.5,
                  animation:
                    currentTurn === 1 && !isThrowing
                      ? "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
                      : "none",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: "5rem",
                    height: "5rem",
                    borderRadius: "9999px",
                    background:
                      currentTurn === 1
                        ? "rgb(22, 163, 74)"
                        : "rgb(220, 38, 38)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      textAlign: "center",
                    }}
                  >
                    {isThrowing
                      ? "..."
                      : currentTurn === 1
                      ? "ШИДЭХ"
                      : "ХҮЛЭЭХ"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
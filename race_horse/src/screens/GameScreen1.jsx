import React, { useState, useMemo } from "react";
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
import { RACE_POSITIONS, DEFAULT_PROFILES, SHAGAI_TYPES, THROW_ANIMATION_DURATION } from "../constants/gameConstants";
import { generateShagaiThrow, calculateMovement } from "../utils/gameUtils";

const ICONS = { mori, temee, honi, yamaa };

export default function GameScreen() {
  const [player1Position, setPlayer1Position] = useState(0);
  const [player2Position, setPlayer2Position] = useState(0);
  const [player3Position, setPlayer3Position] = useState(0);
  const [player4Position, setPlayer4Position] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [currentTurn, setCurrentTurn] = useState(1);
  const [isThrowing, setIsThrowing] = useState(false);
  const [result, setResult] = useState(SHAGAI_TYPES);

  const [uploadedImages, setUploadedImages] = useState({
    skill1: null,
    skill2: null,
    skill3: null,
  });

  // Memoize skills array with images
  const skills = useMemo(() => [
    { id: 1, icon: tashuur, name: "Тахшуур" },
    { id: 2, icon: imeel, name: "Имээл" },
    { id: 3, icon: shout, name: "Дуудлага" },
  ], []);

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
    setIsThrowing(true);

    setTimeout(() => {
      const arr = generateShagaiThrow(4);
      const move = calculateMovement(arr);

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
        default:
          break;
      }

      setResult(arr);
      setIsThrowing(false);

      // Ээлжийг дараагийн тоглогч руу шилжүүлэх
      setCurrentTurn((prev) => (prev % 4) + 1);
    }, THROW_ANIMATION_DURATION);
  };


  const skills = useMemo(() => [
    { id: 1, icon: tashuur, name: "Тахшуур" },
    { id: 2, icon: imeel, name: "Імээл" },
    { id: 3, icon: shout, name: "Дуудлага" },
  ], []);

  // Memoize static style objects
  const staticStyles = useMemo(() => ({
    dewsgerContainer: {
      position: "absolute",
      top: "70%",
      left: "70%",
      transform: "translate(-50%, -50%)",
      zIndex: 1000,
    },
    dewsgerInner: {
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
    },
    imageStyle: {
      width: 30,
      height: "auto",
      objectFit: "contain",
      position: "relative",
      top: "-12px",
      right: "8px",
    },
  }), []);

  return (
    <div className="game-screen">
      {/* Header + Profiles */}
      <div className="header">
        <div className="profiles">
          {DEFAULT_PROFILES.map((profile) => (
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
          {RACE_POSITIONS.map((pos, index) => (
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
          style={staticStyles.dewsgerContainer}
          className="dewsger"
        >
          <div
            style={staticStyles.dewsgerInner}
            
          >
            {result.map((type, index) => (
             <motion.img
                        key={index}
                        src={ICONS[type]}
                        style={staticStyles.imageStyle}
                        initial={{ y: 0, rotate: 0, opacity: 1 }}
                        animate={
                            isThrowing
                            ? { y: -50, rotate: 1090, opacity: 0.7 }
                            : { y: 0, rotate: 0, opacity: 1 }
                        }
                        transition={{ duration: THROW_ANIMATION_DURATION / 1000 }}
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
                  background: "rgb(34, 197, 94)",
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
                    background: "rgb(22, 163, 74)",
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
                    {isThrowing ? "..." : "ШИДЭХ"}
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
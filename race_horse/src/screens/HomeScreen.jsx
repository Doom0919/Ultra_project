import React from 'react';
import backgroundImage from '../assets/images/background.jpg';
import tawga from '../assets/images/tawga.png';
import '../styles/HomeScreen.css';
import { FaTrophy, FaCog, FaGift, FaUserFriends, FaMedal, FaUserPlus } from "react-icons/fa";

export default function HomeScreen() {
    const player = { id: 1, name: "Alex", image: "https://i.pravatar.cc/150?img=12", score: 1250 };

    return (
        <div className="home-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="header-container">
                <div className="header-profile">
                    <img src={player.image} alt={player.name} style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover" }} />
                </div>
                <div className="header-score">
                    <FaTrophy style={{ color: "#fcd34d", fontSize: "24px" }} />
                    <span style={{ fontSize: "20px", fontWeight: "bold" }}>{player.score}</span>
                    <span style={{ fontSize: "20px", fontWeight: "bold", color: "#666" }}>+</span>
                </div>
                <div className="header-gift">
                    <FaGift style={{ fontSize: "28px", color: "#ef4444", cursor: "pointer" }} />
                </div>
                <div className="header-settings">
                    <FaCog style={{ fontSize: "28px", color: "#555", cursor: "pointer" }} />
                </div>
            </div>

            <div className="content">
                <h1 className="title">Тоглолт үүсгэх</h1>
                <button className="mode-button public-button">Нийтийн</button>
                <button className="mode-button private-button">Хувийн</button>
                <div className="coins-display">
                    <span className="coin-amount">1,400</span>
                </div>
            </div>

            <div className="footer">
                <button className="footer-btn"><span>Найз</span></button>
                <button className="footer-btn"><span>Эрэмбэ</span></button>
                <button className="footer-btn"><span>Урих</span></button>
            </div>
            <img src={tawga} alt="Horse Racing" className="banner-image" />
        </div>
    );
}
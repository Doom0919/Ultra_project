import React from "react";
import horse from '../assets/horses/defaultHorse.png';
import {  useState } from "react";
import playerHorse from '../assets/horses/playerhorse.png';
import '../styles/GameScreen.css';
// import ShagaiThrow from '../components/shagaithrow.jsx';

export default function GameScreen() {
    const [player1Position, setPlayer1Position] = useState(0);
    const [player2Position, setPlayer2Position] = useState(0);
    const [player3Position, setPlayer3Position] = useState(0);
    const [player4Position, setPlayer4Position] = useState(0);
    
   
    const positions = [
        { top: '100%', left: '10%', transform: 'rotate(90deg)' },
        { top: '100%', left: '17.3%', transform: 'rotate(90deg)' },
        { top: '100%', left: '24.6%', transform: 'rotate(90deg)' },
        { top: '100%', left: '31.6%', transform: 'rotate(90deg)' },
        { top: '100%', left: '38.6%', transform: 'rotate(90deg)' },
        { top: '100%', left: '45.6%', transform: 'rotate(80deg)' },
        { top: '99%', left: '52.6%', transform: 'rotate(70deg)' },
        { top: '97%', left: '59%', transform: 'rotate(60deg)' },
        { top: '95%', left: '65.5%', transform: 'rotate(50deg)' },
        { top: '92%', left: '71%', transform: 'rotate(10deg)' },
        { top: '87.5%', left: '72%', transform: 'rotate(310deg)' },
        { top: '85.5%', left: '65.8%', transform: 'rotate(270deg)' },
        { top: '85.5%', left: '58.8%', transform: 'rotate(270deg)' },
        { top: '84.5%', left: '51.8%', transform: 'rotate(270deg)' },
        { top: '83.5%', left: '44.8%', transform: 'rotate(270deg)' },
        { top: '83.5%', left: '37.8%', transform: 'rotate(270deg)' },
        { top: '83.5%', left: '30.8%', transform: 'rotate(270deg)' },
        { top: '82.5%', left: '23.8%', transform: 'rotate(280deg)' },
        { top: '81.5%', left: '16.8%', transform: 'rotate(290deg)' },
        { top: '80.1%', left: '9.8%', transform: 'rotate(290deg)' },
        { top: '78.1%', left: '3.5%', transform: 'rotate(310deg)' },
        { top: '74.1%', left: '-1.2%', transform: 'rotate(360deg)' },
        { top: '69.3%', left: '-0.4%', transform: 'rotate(30deg)' },
        { top: '65.3%', left: '2.9%', transform: 'rotate(45deg)' },
        { top: '61.8%', left: '7.8%', transform: 'rotate(65deg)' },
        { top: '59.8%', left: '14.7%', transform: 'rotate(70deg)' },
        { top: '58.3%', left: '21.8%', transform: 'rotate(75deg)' },
        { top: '56.8%', left: '28.8%', transform: 'rotate(85deg)' },
        { top: '56.3%', left: '36.3%', transform: 'rotate(90deg)' },
        { top: '56.3%', left: '43.8%', transform: 'rotate(95deg)' },
        { top: '56.3%', left: '51.3%', transform: 'rotate(100deg)' },
        { top: '56.3%', left: '58.8%', transform: 'rotate(80deg)' },
        { top: '55.8%', left: '66.3%', transform: 'rotate(45deg)' },
        { top: '52.8%', left: '72.3%', transform: 'rotate(20deg)' },
        { top: '48.3%', left: '75.3%', transform: 'rotate(350deg)' },
        { top: '43.8%', left: '73.3%', transform: 'rotate(300deg)' },
        { top: '41.3%', left: '66.8%', transform: 'rotate(290deg)' },
        { top: '40.3%', left: '59.3%', transform: 'rotate(280deg)' },
        { top: '39.8%', left: '51.8%', transform: 'rotate(270deg)' },
        { top: '39.3%', left: '44.3%', transform: 'rotate(275deg)' },
        { top: '38.3%', left: '36.8%', transform: 'rotate(280deg)' },
        { top: '37.3%', left: '29.3%', transform: 'rotate(290deg)' },
        { top: '35.3%', left: '22.3%', transform: 'rotate(300deg)' },
        { top: '32.3%', left: '16.3%', transform: 'rotate(310deg)' },
        { top: '28.3%', left: '11.8%', transform: 'rotate(340deg)' },
        { top: '23.3%', left: ' 10.8%', transform: 'rotate(20deg)' },
        { top: '18.8%', left: '13.8%', transform: 'rotate(40deg)' },
        { top: '15.3%', left: '19.3%', transform: 'rotate(60deg)' },
        { top: '13.3%', left: '26.3%', transform: 'rotate(70deg)' },
        { top: '11.8%', left: '33.8%', transform: 'rotate(70deg)' },
        { top: '10.3%', left: '41.3%', transform: 'rotate(60deg)' },
        { top: '7.8%', left: '47.8%', transform: 'rotate(40deg)' },
        { top: '4.3%', left: '52.8%', transform: 'rotate(20deg)' },
        
    ];
  const profiles = [
    { id: 1, name: "Alex", image: "https://i.pravatar.cc/150?img=12", borderColor: "border-yellow-400" },
    { id: 2, name: "Sarah", image: "https://i.pravatar.cc/150?img=45", borderColor: "border-red-500" },
    { id: 3, name: "Emma", image: "https://i.pravatar.cc/150?img=47", borderColor: "border-blue-500" },
    { id: 4, name: "James", image: "https://i.pravatar.cc/150?img=33", borderColor: "border-green-600" }
  ];
    return (
        <div className="game-screen"> 
              <div className="header">
              <div className="profiles">
               {profiles.map((profile) => (
               <div 
               key={profile.id}
               className="profile"
               >
            <div className={`w-20 h-20 rounded-full border-4 ${profile.borderColor} overflow-hidden bg-white`}>
              <img 
                src={profile.image} 
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
            <div className="content"> 
            <div style={{ }}>
            <div style={{ position: 'relative', width: '100%', height: '600px' , bottom:'-50px' }}>
                {positions.map((pos, index) => (
                    <div
                        key={index}
                        style={{
                            position: 'absolute',
                            top: pos.top,
                            left: pos.left,
                            transform: pos.transform,
                            transition: 'top 0.5s, left 0.5s',
                        }}
                    >
                        <div style={{ display: 'flex' }}>
                            <div className="left">
                                {player1Position === index && <img src={playerHorse} alt="Player Horse" style={{ width: '20px', height: '30px' , }} />}
                                {player2Position === index && <img src={playerHorse} alt="Player Horse" style={{ width: '20px', height: '30px' , }} />}
                            </div>
                             <img src={horse} alt="Horse" style={{ width: '80px', height: 'auto' ,}} />
                            <div className="right"> 
                                {player3Position === index && <img src={playerHorse} alt="Player Horse" style={{ width: '20px', height: '30px' , }} />}
                                {player4Position === index && <img src={playerHorse} alt="Player Horse" style={{ width: '20px', height: '30px' , }} />}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                 <div className="skills">
                    <div className="skill"></div>
                    <div className="skill"></div>
                    <div className="skill"></div>
                 </div>
            </div>
        </div>
            </div>
            <div className="footer"></div>
        </div>
    );
}

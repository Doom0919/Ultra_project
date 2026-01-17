import React from "react";
import horse from '../assets/horses/defaultHorse.png';
import { useState } from "react";
import playerHorse from '../assets/horses/playerhorse.png';
import { RACE_POSITIONS } from "../constants/gameConstants";

export default function GameScreen() {
    const [player1Position, setPlayer1Position] = useState(0);
    const [player2Position, setPlayer2Position] = useState(0);
    const [player3Position, setPlayer3Position] = useState(0);
    const [player4Position, setPlayer4Position] = useState(0);

    return (
        <div style={{ paddingBottom: "80px" }}>
            <div style={{ position: 'relative', width: '100%', height: '600px' }}>
                {RACE_POSITIONS.map((pos, index) => (
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
             <div style={{position : "absolute", bottom : '0px'}}> 
             <button onClick={() => {setPlayer1Position((prev) => Math.min(prev + 1, RACE_POSITIONS.length - 1));}}>Move Player 1</button>    
                <button onClick={() => {setPlayer2Position((prev) => Math.min(prev + 1, RACE_POSITIONS.length - 1));}}>Move Player 2</button>
                <button onClick={() => {setPlayer3Position((prev) => Math.min(prev + 1, RACE_POSITIONS.length - 1));}}>Move Player 3</button>
                <button onClick={() => {setPlayer4Position((prev) => Math.min(prev + 1, RACE_POSITIONS.length - 1));}}>Move Player 4</button>
            </div>
            {/* <div className="shagai-throw">  <ShagaiThrow/> </div> */}
        </div>
        
    );
}
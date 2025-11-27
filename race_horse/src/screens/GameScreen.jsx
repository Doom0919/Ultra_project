import React from "react";
import Horse from '../components/Horse';
import ShagaiThrow from '../components/shagaithrow.jsx';
import '../styles/HomeScreen.css';
export default function GameScreen() {
    // Positions for horses arranged in a curved pattern like the image
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
       { top: '82.5', left: '44.8%', transform: 'rotate(280deg)' },
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
    ];

    return (
        <div style={{paddingBottom: "80px"}}>
        <div style={{ position: 'relative', width: '100%', height: '600px' } }>
            {positions.map((pos, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        top: pos.top,
                        left: pos.left,
                        transform: pos.transform,
                    }}
                >
                    <Horse/>
                </div>
            ))}
        </div>
        <div className="shagai-throw">  <ShagaiThrow/> </div>
        </div>
    );
}
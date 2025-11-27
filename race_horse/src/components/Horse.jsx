import React from "react";
import horse from '../assets/horses/defaultHorse.png';

export default function Horse() {
    return <div>
       <img src={horse} alt="Horse" style={{ width: '80px', height: 'auto' ,}} />
    </div>
}
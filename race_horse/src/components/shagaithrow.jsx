import { useState } from "react";
import { motion } from "framer-motion";

import mori from "../assets/images/mori.png";
import temee from "../assets/images/temee.png";
import honi from "../assets/images/honi.png";
import yamaa from "../assets/images/yamaa.png";
import hiws1 from "../assets/images/hiws1.jpg";

const ICONS = { mori, temee, honi, yamaa };
const TYPES = ["mori", "temee", "honi", "yamaa"];

export default function ShagaiThrow() {
  const [result, setResult] = useState([]);
  const [isThrowing, setIsThrowing] = useState(false);

  const throwShagai = () => {
    setIsThrowing(true);

    setTimeout(() => {
      // Generate 4 random results
      const arr = Array.from({ length: 4 }, () =>
        TYPES[Math.floor(Math.random() * TYPES.length)]
      );
      setResult(arr);
      setIsThrowing(false);
    }, 900);
  };

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <button
        onClick={throwShagai}
        disabled={isThrowing}
        style={{
          padding: "12px 24px",
          fontSize: "18px",
          borderRadius: "8px",
          cursor: "pointer",
          marginBottom: "24px",
        }}
      >
        Шагай шидэх
      </button>

            <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            justifyItems: "center",
            alignItems: "center",
            maxWidth: 240,
            margin: "0 auto",
            padding: 20,
            backgroundImage: `url(${hiws1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: 12,
            boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
          }}
          >
        {result.map((type, index) => (
             <motion.img
            key={index}
            src={ICONS[type]}
            style={{ width: 90 }}
            initial={{ y: 0, rotate: 0, opacity: 1 }}
            animate={
                isThrowing
                ? { y: -120, rotate: 720, opacity: 0.7 }
                : { y: 0, rotate: 0, opacity: 1 }
            }
            transition={{ duration:0.9 }}
            />
        ))}
        </div>

    </div>
  );
}

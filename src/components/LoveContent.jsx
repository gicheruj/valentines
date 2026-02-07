import { motion } from "framer-motion";
import "./LoveContent.css";

export default function LoveContent() {
  const hearts = Array.from({ length: 20 });

  return (
    <div className="love-container">
      {/* Floating hearts background */}
      {hearts.map((_, i) => {
        const left = Math.random() * 100;
        const size = Math.random() * 1 + 0.5;
        const delay = Math.random() * 3;

        return (
          <motion.div
            key={i}
            className="heart-bg"
            style={{ left: `${left}vw`, scale: size }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: "110vh", opacity: 0.8 }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay,
              ease: "linear",
            }}
          />
        );
      })}

      {/* Centered love message */}
      <motion.div
        className="love-message"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <p>
          We’ve shared time. <br />
          Real time. <br />
          The kind that teaches you who someone is. <br />
          <br />
          And after all of it, <br />
          the good days, <br />
          the quiet ones, <br />
          the imperfect moments… <br />
          <br />
          I still choose you. <br />
          Not out of habit, <br />
          but out of love. <br />
          I looovvveee You. 
        </p>
      </motion.div>
    </div>
  );
}

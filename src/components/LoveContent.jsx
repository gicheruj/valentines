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
          I won't promise a lot,<br /> not the moon, not fireworks. <br />
          But I do promise to show up. <br />
          <br />
          On ordinary days. <br />
          In small ways. <br />
          When it’s easy <br />
          and when it’s not. <br />
          <br />
          This is me, <br />
          choosing you.
        </p>
      </motion.div>
    </div>
  );
}

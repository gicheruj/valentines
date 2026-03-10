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
        If love were rain, <br />
        then you would be my favorite storm. <br />
        <br />
        Not the kind that destroys, <br />
        but the kind that makes the earth breathe again. <br />
        <br />
        The kind that makes the air softer, <br />
        the world quieter, <br />
        and hearts a little braver. <br />
        <br />
        And if loving you means <br />
        standing in the rain forever… <br />
        <br />
        then let the skies open. <br />
        I’m not running. <br /> <br />
        Love, <br />
        John Doe.
      </p>
      </motion.div>
    </div>
  );
}

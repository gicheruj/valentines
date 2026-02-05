import { useEffect, useState } from "react";
import "./TerminalWelcome.css";

const message =
  "initializing connection...\n" +
  "authenticating user...\n\n" +
  "access granted.\n\n" +
  "hey you,\n" +
  "Here's something for u.\n" +
  "Hope you like it";


export default function TerminalWelcome({ onNext }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < message.length) {
      // Typing effect
      const timeout = setTimeout(() => {
        setText((prev) => prev + message[index]);
        setIndex(index + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      // Typing finished → trigger onNext **only once**
      if (onNext) {
        // Small delay before moving to transition
        const timer = setTimeout(() => {
          onNext();
        }, 800);

        return () => clearTimeout(timer);
      }
    }
  }, [index, onNext]);

  return (
    <div className="terminal">
      <pre className="terminal-text">
        {text}
        <span className="cursor">▋</span>
      </pre>
    </div>
  );
}

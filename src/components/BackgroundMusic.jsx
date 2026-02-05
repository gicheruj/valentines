import { useRef, useState } from "react";
import music from "../assets/music.mp3";
import "./BackgroundMusic.css";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 0.25; // fixed low background volume
      audioRef.current.play().catch(() => {});
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={music} loop />
      <button className="music-toggle" onClick={toggleMusic}>
        {isPlaying ? "⏸️" : "▶️"}
      </button>
    </>
  );
}

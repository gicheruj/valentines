import Lottie from "lottie-react";
import { useEffect } from "react";
import animationData from "../assets/I love you.json"; // <-- replace with your downloaded Lottie file
import "./AnimationTransition.css";

export default function AnimationTransition({ onComplete }) {
  useEffect(() => {
    // Assuming the animation is ~3 seconds long, call onComplete after it finishes
    const timer = setTimeout(() => {
      onComplete && onComplete();
    }, 6000); // adjust to your animation duration in ms

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="animation-transition">
      <Lottie animationData={animationData} loop={false} />
    </div>
  );
}

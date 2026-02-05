import { useState } from "react";
import TerminalWelcome from "./components/TerminalWelcome";
import AnimationTransition from "./components/AnimationTransition";
import LoveContent from "./components/LoveContent";
import BackgroundMusic from "./components/BackgroundMusic";

function App() {
  const [page, setPage] = useState("welcome");
  const [musicStarted, setMusicStarted] = useState(false);

  return (
    <>
      <BackgroundMusic start={musicStarted} />

      {page === "welcome" && (
        <TerminalWelcome
          onNext={() => {
            setMusicStarted(true);
            setPage("transition");
          }}
        />
      )}

      {page === "transition" && (
        <AnimationTransition onComplete={() => setPage("content")} />
      )}

      {page === "content" && <LoveContent />}
    </>
  );
}

export default App;

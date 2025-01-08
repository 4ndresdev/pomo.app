import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { getUserData, setUserData } from "@/services/localStorageService";

const TimerContext = createContext();

const DEFAULT_TIMER = 1500;

export function TimerProvider({ children }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(DEFAULT_TIMER);

  useEffect(() => {
    const isFullScreenStored = getUserData("isFullScreen");
    if (isFullScreenStored) {
      setIsFullScreen(true);
    } else {
      setIsFullScreen(false);
    }
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setTimeLeft((prevState) => prevState - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  });

  function handleFullScreen() {
    setIsFullScreen((prevState) => !prevState);
    setUserData("isFullScreen", !isFullScreen);
  }

  function handlePlay() {
    setIsPlaying((prevState) => !prevState);
  }

  const mm = Math.floor((timeLeft % 3600) / 60);
  const ss = timeLeft % 60;

  return (
    <TimerContext.Provider
      value={{
        isFullScreen,
        setIsFullScreen,
        handleFullScreen,
        handlePlay,
        mm,
        ss,
        isPlaying,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

TimerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TimerContext;

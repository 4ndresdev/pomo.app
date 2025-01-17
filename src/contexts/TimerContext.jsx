import PropTypes from "prop-types";
import { createContext, useCallback, useEffect, useState } from "react";
import { getUserData, setUserData } from "@/services/localStorageService";
import { fireworks } from "@/utils/confetti";

const TimerContext = createContext();

const DEFAULT_TIMER = 1500;
const DEFAULT_BREAK_TIMER = 10;

export function TimerProvider({ children }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [timerTab, setTimerTab] = useState("focus");
  const [timeLeft, setTimeLeft] = useState(DEFAULT_TIMER);
  const [confirmAlert, setConfirmAlert] = useState(false);

  function handlePlay() {
    setIsPlaying((prevState) => !prevState);
    setIsDirty(true);
  }

  const handleReset = useCallback(() => {
    setIsPlaying(false);
    setIsDirty(false);

    if (timerTab === "focus") {
      setTimeLeft(DEFAULT_TIMER);
    } else {
      setTimeLeft(DEFAULT_BREAK_TIMER);
    }
  }, [timerTab]);

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
        if (timeLeft === 0) {
          setConfirmAlert(false);
          fireworks();
          setIsPlaying(false);
          handleReset();
          return;
        }

        setTimeLeft((prevState) => prevState - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isPlaying, timeLeft, handleReset]);

  function handleFullScreen() {
    setIsFullScreen((prevState) => !prevState);
    setUserData("isFullScreen", !isFullScreen);
  }

  const handleConfirmAlert = useCallback(() => {
    setConfirmAlert(false);
    if (timerTab === "focus") {
      setTimerTab("break");
      setTimeLeft(DEFAULT_BREAK_TIMER);
    } else {
      setTimerTab("focus");
      setTimeLeft(DEFAULT_TIMER);
    }
    setIsPlaying(false);
    setIsDirty(false);
  }, [timerTab]);

  const handleTabChange = useCallback(
    (tab) => {
      if (isPlaying && tab !== timerTab) {
        setConfirmAlert(true);
      } else {
        setTimerTab(tab);
        if (tab === "focus") {
          setTimeLeft(DEFAULT_TIMER);
        } else {
          setTimeLeft(DEFAULT_BREAK_TIMER);
        }
      }
    },
    [isPlaying, timerTab]
  );

  const mm = Math.floor((timeLeft % 3600) / 60);
  const ss = timeLeft % 60;

  return (
    <TimerContext.Provider
      value={{
        isFullScreen,
        setIsFullScreen,
        handleFullScreen,
        handlePlay,
        handleReset,
        mm,
        ss,
        isPlaying,
        isDirty,
        timerTab,
        handleTabChange,
        confirmAlert,
        setConfirmAlert,
        handleConfirmAlert,
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

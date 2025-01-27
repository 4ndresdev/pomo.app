import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";
import { getUserData, setUserData } from "@/services/db/user.db";
import { fireworks } from "@/utils/confetti";
import useSound from "use-sound";
import completedSound from "@/assets/sounds/completedSound.mp3";

const TimerContext = createContext();

const DEFAULT_TIMER = 1500;
const DEFAULT_BREAK_TIMER = 300;

export function TimerProvider({ children }) {
  const [play] = useSound(completedSound);
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
    setTimeLeft(timerTab === "focus" ? DEFAULT_TIMER : DEFAULT_BREAK_TIMER);
  }, [timerTab]);

  useEffect(() => {
    async function fetchData() {
      const isFullScreenStored = await getUserData("isFullScreen");
      if (isFullScreenStored) {
        setIsFullScreen(true);
      } else {
        setIsFullScreen(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        if (timeLeft === 0) {
          play();
          setConfirmAlert(false);
          fireworks();
          setIsPlaying(false);
          setIsDirty(false);
          setTimerTab((prevTab) => (prevTab === "focus" ? "break" : "focus"));
          setTimeLeft(
            timerTab === "focus" ? DEFAULT_BREAK_TIMER : DEFAULT_TIMER
          );
          return;
        }
        setTimeLeft((prevState) => prevState - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isPlaying, timeLeft, play, timerTab]);

  async function handleFullScreen() {
    setIsFullScreen((prevState) => !prevState);
    await setUserData({ isFullScreen: !isFullScreen });
  }

  const handleConfirmAlert = useCallback(() => {
    setConfirmAlert(false);
    setTimerTab((prevTab) => (prevTab === "focus" ? "break" : "focus"));
    setTimeLeft(timerTab === "focus" ? DEFAULT_BREAK_TIMER : DEFAULT_TIMER);
    setIsPlaying(false);
    setIsDirty(false);
  }, [timerTab]);

  const handleTabChange = useCallback(
    (tab) => {
      if (isPlaying && tab !== timerTab) {
        setConfirmAlert(true);
      } else {
        setTimerTab(tab);
        setTimeLeft(tab === "focus" ? DEFAULT_TIMER : DEFAULT_BREAK_TIMER);
      }
    },
    [isPlaying, timerTab]
  );

  const formattedTime = useMemo(() => {
    const mm = Math.floor((timeLeft % 3600) / 60);
    const ss = timeLeft % 60;
    return `${mm}:${ss < 10 ? `0${ss}` : ss}`;
  }, [timeLeft]);

  useEffect(() => {
    document.title = `${formattedTime} Pomo.app ${
      timerTab === "focus" ? "🔥" : "❄️"
    }`;
  }, [formattedTime, timerTab]);

  return (
    <TimerContext.Provider
      value={{
        isFullScreen,
        setIsFullScreen,
        handleFullScreen,
        handlePlay,
        handleReset,
        mm: Math.floor((timeLeft % 3600) / 60),
        ss: timeLeft % 60,
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

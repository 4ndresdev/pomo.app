import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { getUserData, setUserData } from "@/services/localStorageService";

const TimerContext = createContext();

export function TimerProvider({ children }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const isFullScreenStored = getUserData("isFullScreen");
    if (isFullScreenStored) {
      setIsFullScreen(true);
    } else {
      setIsFullScreen(false);
    }
  }, []);

  function handleFullScreen() {
    setIsFullScreen((prevState) => !prevState);
    setUserData("isFullScreen", !isFullScreen);
  }

  return (
    <TimerContext.Provider
      value={{ isFullScreen, setIsFullScreen, handleFullScreen }}
    >
      {children}
    </TimerContext.Provider>
  );
}

TimerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TimerContext;

import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

TypingEffect.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
};

export default TypingEffect;

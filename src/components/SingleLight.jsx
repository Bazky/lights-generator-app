import { useState } from "react";
import LightTurnedOff from "/images/light-turned-off.svg";
import LightBlue from "/images/light-blue.svg";
import LightGreen from "/images/light-green.svg";
import LightOrange from "/images/light-orange.svg";
import LightPink from "/images/light-pink.svg";
import LightRed from "/images/light-red.svg";
import LightYellow from "/images/light-yellow.svg";

const colors = [
  LightBlue,
  LightGreen,
  LightOrange,
  LightPink,
  LightRed,
  LightYellow,
];

export const SingleLight = () => {
  const [isOn, setOn] = useState(true);

  const getRandomColor = () => {
    return Math.floor(Math.random() * colors.length);
  };
  const randomIndex = getRandomColor();

  const imageSrc = isOn ? colors[randomIndex] : LightTurnedOff;

  const handleClick = () => {
    setOn(!isOn);
  };

  return <img onClick={handleClick} src={imageSrc} alt="Single light" />;
};

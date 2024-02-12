import React from "react";
import buttonStyles from "./buttonStyles.module.css";

const bs = buttonStyles;

type ButtonColor = "color1" | "color2" | "color3";
type ButtonWidth = "wide" | "narrow" | "normal";

interface ButtonProps {
  buttonTag: string; // Add a 'buttonTag' prop
  onClick?: () => void;
  buttonColor?: ButtonColor;
  buttonWidth?: ButtonWidth;
}

const Button = ({
  buttonTag,
  onClick,
  buttonColor,
  buttonWidth,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`${bs.button_main} ${bs[buttonColor as keyof typeof bs]} ${
        bs[buttonWidth as keyof typeof bs]
      }`}
      onClick={onClick}
      {...rest}
    >
      {buttonTag}
    </button>
  );
};

export default Button;

import React from "react";
import Styles from "./ButtonsContainer.module.css";

function Buttons({ onButtonClick }) {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={Styles.buttonsContainer}>
      {buttons.map((button) => (
        <button
          key={button}
          className={Styles.button}
          onClick={() => onButtonClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
}

export default Buttons;

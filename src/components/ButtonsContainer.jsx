import React from "react";
import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "AC",
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "5",
    "-",
    "6",
    "7",
    "8",
    "X",
    ".",
    "/",
    "9",
    "0",
    "=",
  ];
  return (
    <div>
      <div className={styles.buttonsContainer}>
        {buttonNames.map((buttonName) => (
          <button
            key={buttonName}
            id={styles.button}
            className={`border-0 ${buttonName == "C" ? "bg-danger" : buttonName == "AC" ? "bg-warning": buttonName == "=" ? "bg-info" : "bg-primary"} `}
            onClick={() => onButtonClick(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonsContainer;

import React from "react";
import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "1",
    "2",
    "3",
    "C",
    "4",
    "5",
    "6",
    "+",
    "7",
    "8",
    "9",
    "-",
    "0",
    ".",
    "*",
    "/",
    "=",
    "AC"
  ];
  return (
    <div>
      <div className={styles.buttonsContainer}>
        {buttonNames.map((buttonName) => (
          <button key={buttonName}
            id={styles.button} className={`${buttonName=="C"? "bg-danger":buttonName=="="?'bg-info':'bg-primary'} border-0`}
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

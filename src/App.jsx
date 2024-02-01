import React, { useState } from "react";
import Styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  const [displayVal, setDisplayVal] = useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText === 'C'){
      setDisplayVal("");
    }
    else if(buttonText === '='){
      const result = eval(displayVal);
      setDisplayVal(result);
    }
    else{
      const newDisplayValue = displayVal + buttonText;
      setDisplayVal(newDisplayValue);
    }
  };

  return (
    <div className={Styles.calculator}>
      <Display displayVal={displayVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;

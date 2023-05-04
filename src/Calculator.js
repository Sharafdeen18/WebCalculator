import React, { useState } from "react";
import CalculatorPanel from "./CalculatorPanel";
/*eslint no-eval:0*/
let clear_button=document.querySelector(".calculator-clear-button")
function Calculator(props) {
  const [Calc, setCalc] = useState("");
  const [DotCntrl, setDotCntrl] = useState(true);

  const numberHandler = (number) => {
    setCalc(Calc + number);
    // setDotCntrl(true);
  };

  const dotHandler = (dot) => {
    if (Calc.includes(dot) && !DotCntrl === true) {
      return;
    }
    // if (Calc.includes(dot) && !["*","-","+","/"].includes(Calc.slice(-2,-1))) {return;}
    setCalc(`${Calc}${dot}`);
    setDotCntrl(false);
  };
  const clearHandler = () => {
    if (Calc === "") {
      return;
    }
    const number = Calc.slice(0, -1);
    setCalc(number);

//  /*
// const longPress=(element,callback,duration)=> {
  let timeout
  let duration=600
  console.log(duration)
  const start=()=> {timeout=window.setTimeout(clearAll_Calc,duration);}
  const end=()=>{window.clearTimeout(timeout);}
  clear_button.addEventListener('mousedown',start);
  clear_button.addEventListener('mouseup',end);
// }
// */

  };
  let clearAll_Calc=()=> {setCalc("")}

  const operationHandler = (operator) => {
     // if (["*", "-", "+", "/"].includes(Calc)){equalHandler();}
    if (isNaN(Calc.slice(-1)) || Calc.slice(-1) === operator) {
        
      return;
    }
   
    setCalc(`${Calc}${operator}`);
    setDotCntrl(true);
    
    
    
  };
  const equalHandler = () => {
    setDotCntrl(false);
    if (["*", "-", "+", "/"].includes(Calc.slice(-1))) {
      return;
    }
    //props.calculatorApi.calculate(Calc,Result=>setCalc(Calc))
    setCalc(eval(Calc).toString());
  };

  return (
    <div className="calculator-grid-container">
      <CalculatorPanel
        DotCntrl={Calc}
        numberClicked={numberHandler}
        dotClicked={dotHandler}
        clearClicked={clearHandler}
        operationClicked={operationHandler}
        equalClicked={equalHandler}
      />
    </div>
  );
}

export default Calculator;

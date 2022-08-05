/* eslint-disable react/prefer-stateless-function */

import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../Logic/calculate';

const Calculator = () => {
  const [calc, setCalc] = useState({ total: '', operation: '', next: '' });

  const handleClick = (e) => {
    setCalc(calculate(calc, e.target.innerText));
  };

  return (
    <main>
      <section className="calculator">
        <p className="input">{(calc.total || '') + (calc.operation || '') + (calc.next || '') || 0 }</p>
        <button type="button" id="AC" onClick={handleClick}>AC</button>
        <button type="button" id="+/-" onClick={handleClick}>+/-</button>
        <button type="button" id="%" onClick={handleClick}>%</button>
        <button className="symbol" type="button" id="&divide;" onClick={handleClick}>&divide;</button>
        <button type="button" id="7" onClick={handleClick}>7</button>
        <button type="button" id="8" onClick={handleClick}>8</button>
        <button type="button" id="9" onClick={handleClick}>9</button>
        <button className="symbol" type="button" id="x" onClick={handleClick}>x</button>
        <button type="button" id="4" onClick={handleClick}>4</button>
        <button type="button" id="5" onClick={handleClick}>5</button>
        <button type="button" id="6" onClick={handleClick}>6</button>
        <button className="symbol" type="button" id="-" onClick={handleClick}>-</button>
        <button type="button" id="1" onClick={handleClick}>1</button>
        <button type="button" id="2" onClick={handleClick}> 2 </button>
        <button type="button" id="3" onClick={handleClick}> 3 </button>
        <button className="symbol" type="button" id="+" onClick={handleClick}>+</button>
        <button className="zero" type="button" id="0" onClick={handleClick}>0</button>
        <button type="button" id="." onClick={handleClick}>.</button>
        <button className="symbol" type="button" id="=" onClick={handleClick}>=</button>
      </section>
    </main>
  );
};

export default Calculator;

import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="calculator-screen">
          <h2>0</h2>
        </div>
        <div className="calculator-body">
          <div className="nums">
            <ul className="top-ones">
              <li className="ind-btn">AC</li>
              <li className="ind-btn">+/-</li>
              <li className="ind-btn">%</li>
              <li className="ind-btn">7</li>
              <li className="ind-btn">8</li>
              <li className="ind-btn">9</li>
              <li className="ind-btn">4</li>
              <li className="ind-btn">5</li>
              <li className="ind-btn">6</li>
              <li className="ind-btn">1</li>
              <li className="ind-btn">2</li>
              <li className="ind-btn">3</li>
            </ul>
            <ul className="bottom-ones">
              <li className="ind-btn2">0</li>
              <li className="ind-btn">.</li>
            </ul>
          </div>
          <ul className="operators">
            <li className="ind-btn3">÷</li>
            <li className="ind-btn3">×</li>
            <li className="ind-btn3">-</li>
            <li className="ind-btn3">+</li>
            <li className="ind-btn3">=</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Calculator;

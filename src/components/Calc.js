import React, { useState } from 'react';
import { MathOperation, operationTypes } from './MathOperation';
import DigitButton from './DigitButton';

function calculate(operation, num1, num2) {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    case '%':
      return num1 % num2;
  }
}

function Calc() {
  /* eslint no-eval: 0 */

  const [input, setInput] = useState('');

  const [state, setState] = useState({
    currentNumber: 0,
    previousNumber: null,
    currentOperation: null /* Must be one of the operations type */,
    isFloating: false,
  });

  const operationBtns = operationTypes.map((name) => (
    <MathOperation
      type={name}
      onClick={(e) => {
        setInput(input + e.target.value);
      }}
    />
  ));

  const digitBtns = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((digit) => (
    <DigitButton
      value={digit}
      onClick={() => {
        let newNum;
        if (!state.isFloating) {
          newNum = state.currentNumber * 10 + digit;
        } else {
          if (state.currentNumber === Math.floor(state.currentNumber)) {
            newNum = state.currentNumber + digit / 10;
          } else {
            newNum = parseFloat(state.currentNumber.toString() + digit);
          }
        }
        setState({ ...state, currentNumber: newNum });
      }}
    />
  ));

  digitBtns.push(
    <DigitButton
      value={'.'}
      onClick={() => {
        setState({ ...state, isFloating: true });
      }}
    />
  );

  digitBtns.push(
    <DigitButton
      value='='
      type='equal'
      onClick={() => {
        const newNum = calculate(
          state.currentOperation,
          state.previousNumber,
          state.currentNumber
        );
        setState({
          ...state,
          previousNumber: null,
          currentNumber: newNum,
        });
      }}
    />
  );

  return (
    <div className='calculator'>
      <div className='result'>{state.currentNumber}{'   '}{state.previousNumber}</div>
      <div className='calculator-digits calculator-buttons'>
        <div>{operationBtns}</div>
        <div className='digits'>{digitBtns}</div>
        <div className='operations'>
          {/* clear all */}
          <MathOperation type='AC' onClick={() => setInput('')} />

          {/* add button */}
          <MathOperation
            type='plus'
            value='+'
            onClick={() => {
              const previousOperation = state.currentOperation;
              if (previousOperation && state.previousNumber) {
                const newNum = calculate(
                  previousOperation,
                  state.previousNumber,
                  state.currentNumber
                );
                setState({
                  ...state,
                  previousNumber: newNum,
                  currentNumber: 0,
                });
                console.log(newNum);
              }
              setState({ ...state, currentNumber: 0, currentOperation: '+' });
            }}
          />

          {/* minus btn */}
          <MathOperation
            type='minus'
            value='-'
            onClick={(e) => setInput(input + e.target.value)}
          />

          {/* multiply btn */}
          <MathOperation
            type='multi'
            value='*'
            onClick={(e) => setInput(input + e.target.value)}
          />

          {/* divide btn */}
          <MathOperation
            type='divide'
            value='/'
            onClick={(e) => setInput(input + e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Calc;

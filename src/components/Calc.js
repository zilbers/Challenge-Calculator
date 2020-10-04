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
          currentOperation: null,
        });
      }}
    />
  );

  return (
    <div className='calculator'>
      <div className='result'>
        <span className='calculations'>
          {state.previousNumber &&
            state.previousNumber + state.currentOperation}
        </span>
        {state.currentNumber}
      </div>
      <div className='calculator-digits calculator-buttons'>
        <div className='digits'>{digitBtns}</div>
        <div className='operations'>
          {/* clear all */}
          <MathOperation
            type='AC'
            onClick={() =>
              setState({
                currentNumber: 0,
                previousNumber: null,
                currentOperation: null /* Must be one of the operations type */,
                isFloating: false,
              })
            }
          />

          {/* add button */}
          <MathOperation
            type='plus'
            onClick={() => {
              const previousOperation = state.currentOperation;
              let newNum = state.currentNumber;
              if (previousOperation && state.previousNumber !== null) {
                newNum = calculate(
                  previousOperation,
                  state.previousNumber,
                  state.currentNumber
                );
              }
              setState({
                ...state,
                currentNumber: 0,
                currentOperation: '+',
                previousNumber: newNum,
              });
            }}
          />

          {/* minus btn */}
          <MathOperation
            type='minus'
            onClick={() => {
              const previousOperation = state.currentOperation;
              let newNum = state.currentNumber;
              if (previousOperation && state.previousNumber !== null) {
                newNum = calculate(
                  previousOperation,
                  state.previousNumber,
                  state.currentNumber
                );
              }
              setState({
                ...state,
                currentNumber: 0,
                currentOperation: '-',
                previousNumber: newNum,
              });
            }}
          />

          {/* multiply btn */}
          <MathOperation
            type='multi'
            onClick={() => {
              const previousOperation = state.currentOperation;
              let newNum = state.currentNumber;
              if (previousOperation && state.previousNumber !== null) {
                newNum = calculate(
                  previousOperation,
                  state.previousNumber,
                  state.currentNumber
                );
              }
              setState({
                ...state,
                currentNumber: 0,
                currentOperation: '*',
                previousNumber: newNum,
              });
            }}
          />

          {/* divide btn */}
          <MathOperation
            type='divide'
            onClick={() => {
              const previousOperation = state.currentOperation;
              let newNum = state.currentNumber;
              if (previousOperation && state.previousNumber !== null) {
                newNum = calculate(
                  previousOperation,
                  state.previousNumber,
                  state.currentNumber
                );
              }
              setState({
                ...state,
                currentNumber: 0,
                currentOperation: '/',
                previousNumber: newNum,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Calc;

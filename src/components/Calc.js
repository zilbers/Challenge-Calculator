import React, { useState } from 'react';
import { MathOperation, operationTypes } from './MathOperation';
import DigitButton from './DigitButton';

function calculate(operation, num1, num2 = 0) {
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
    case 'power':
      return Math.pow(num1, 2);
    case 'sqrt':
      return Math.sqrt(num1);
  }
}

function Calc() {
  /* eslint no-eval: 0 */

  const [state, setState] = useState({
    currentNumber: 0,
    previousNumber: null,
    currentOperation: null /* Must be one of the operations type */,
    isFloating: false,
    error: false,
  });

  // Digits
  const digitBtns = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((digit) => (
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
        setState({ ...state, currentNumber: newNum, error: false });
      }}
    />
  ));

  // Square root
  digitBtns.push(
    <MathOperation
      type={'sqrt'}
      onClick={() => {
        const newNum = calculate('sqrt', state.currentNumber);
        setState({
          ...state,
          currentNumber: newNum,
          currentOperation: null,
          previousNumber: null,
          error: false,
          isFloating: false,
        });
      }}
    />
  );

  // Power
  digitBtns.push(
    <MathOperation
      type={'power'}
      onClick={() => {
        const newNum = calculate('power', state.currentNumber);
        setState({
          ...state,
          currentNumber: newNum,
          currentOperation: null,
          previousNumber: null,
          error: false,
          isFloating: false,
        });
      }}
    />
  );

  // Modulo
  digitBtns.push(
    <MathOperation
      type={'modulo'}
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
          currentOperation: '%',
          previousNumber: newNum,
          error: false,
          isFloating: false,
        });
      }}
    />
  );

  // Dot
  digitBtns.push(
    <MathOperation
      type={'dot'}
      onClick={() => {
        setState({ ...state, isFloating: true });
      }}
    />
  );

  // Equal
  digitBtns.push(
    <MathOperation
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
          currentNumber: newNum === Infinity ? 0 : newNum,
          currentOperation: null,
          error: newNum === Infinity ? true : false,
          isFloating: false,
        });
      }}
    />
  );

  return (
    <div className='calculator'>
      <div className='result'>
        {state.error ? (
          <span>Error</span>
        ) : (
          <>
            <span className='calculations'>
              {state.previousNumber &&
                state.previousNumber + state.currentOperation}
            </span>
            <span>{state.currentNumber}</span>
          </>
        )}
      </div>
      <div className='calculator-digits'>
        {digitBtns}

        {/* clear all */}
        <MathOperation
          type='AC'
          onClick={() =>
            setState({
              currentNumber: 0,
              previousNumber: null,
              currentOperation: null /* Must be one of the operations type */,
              isFloating: false,
              error: false,
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
              error: false,
              isFloating: false,
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
              error: false,
              isFloating: false,
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
              error: false,
              isFloating: false,
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
              error: false,
              isFloating: false,
            });
          }}
        />
      </div>
    </div>
  );
}

export default Calc;

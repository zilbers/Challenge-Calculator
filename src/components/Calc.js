import React, { useState } from 'react';
import OperationButton from './OperationButton';
import DigitButton from './DigitButton';
import MathOperation from './MathOperation';

function Calc() {
  /* eslint no-eval: 0 */

  const [input, setInput] = useState('');
  const calcBtns = [];

  const op = ['leftParentheses', 'rightParentheses', 'modulo'];
  ['(', ')', '%'].forEach((value, index) => {
    calcBtns.push(
      <OperationButton
        value={value}
        type={op[index]}
        onClick={(e) => {
          setInput(input + e.target.value);
        }}
      />
    );
  });
  [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0].forEach((item) => {
    calcBtns.push(
      <DigitButton
        value={item}
        onClick={(e) => {
          setInput(input + e.target.value);
        }}
      />
    );
  });

  calcBtns.push(
    <DigitButton
      value='='
      type='equal'
      input={input}
      setInput={setInput}
      onClick={() => {
        try {
          setInput(
            String(eval(input)).length > 3 && String(eval(input)).includes('.')
              ? String(eval(input).toFixed(4))
              : String(eval(input))
          );
        } catch (e) {
          console.log(e);
        }
      }}
    />
  );

  return (
    <div className='calculator'>
      <div className='result'>{input}</div>
      <div className='calculator-digits calculator-buttons'>
        <div className='digits'>{calcBtns}</div>
        <div className='operations'>
          {/* clear all */}
          <MathOperation type='AC' onClick={() => setInput('')} />

          {/* add button */}
          <MathOperation
            type='plus'
            value='+'
            onClick={(e) => setInput(input + e.target.value)}
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

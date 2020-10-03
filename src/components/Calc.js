import React, { useState } from 'react';

function Calc() {
  /* eslint no-eval: 0 */

  const [input, setInput] = useState('');
  const calcBtns = [];

  const op = ['leftParentheses', 'rightParentheses', 'modulo'];
  ['(', ')', '%'].forEach((item, index) => {
    calcBtns.push(
      <button
        className='button number op'
        id={`op_${op[index]}`}
        onClick={(e) => {
          setInput(input + e.target.value);
        }}
        value={item}
        key={item}
      >
        {' '}
        {item}
      </button>
    );
  });
  [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0].forEach((item) => {
    calcBtns.push(
      <button
        className='button number'
        id={`digit_${item}`}
        onClick={(e) => {
          setInput(input + e.target.value);
        }}
        value={item}
        key={item}
      >
        {' '}
        {item}
      </button>
    );
  });

  calcBtns.push(
    <button
      className='button number'
      onClick={(e) => {
        if (String(eval(input)) === 'Infinity') {
          setInput('error')
        } else {
          try {
            setInput(
              String(eval(input)).length > 3 && String(eval(input)).includes('.')
                ? String(eval(input).toFixed(4))
                : String(eval(input))
            );
          } catch (e) {
            console.log(e);
          }
        }
      }}
      value='='
      id='equal'
    >
      =
    </button>
  );

  return (
    <div className='calculator'>
      <div className='result'>{input}</div>
      <div className='calculator-digits calculator-buttons'>
        <div className='digits'>{calcBtns}</div>
        <div className='operations'>
          {/* clear all */}
          <button
            className='button AC'
            onClick={() => setInput('')}
            value=''
            id='op_AC'
          >
            AC
          </button>
          {/* add button */}
          <button
            className='button'
            onClick={(e) => setInput(input + e.target.value)}
            value='+'
            id='op_plus'
          >
            +
          </button>

          {/* minus btn */}
          <button
            className='button'
            onClick={(e) => setInput(input + e.target.value)}
            value='-'
            id='op_minus'
          >
            {' '}
            -{' '}
          </button>

          <button
            className='button'
            onClick={(e) => setInput(input + e.target.value)}
            value='*'
            id='op_multi'
          >
            {' '}
            *
          </button>

          <button
            className='button'
            onClick={(e) => setInput(input + e.target.value)}
            value='/'
            id='op_divide'
          >
            {' '}
            /
          </button>
          {/* "=" btn */}
        </div>
        {/* <div className='modifiers'> */}
        {/* clear button */}
        {/* 
          <button
            className='button delete'
            onClick={() => setInput(input.substr(0, input.length - 1))}
          >
            Delete
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Calc;

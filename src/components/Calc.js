import React, { useState } from 'react';

// import "./css/Calc.css";

function Calc() {
  /* eslint no-eval: 0 */

  const [input, setInput] = useState('');
  const calcBtns = [];
  ['(', ')', '%', 7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0].forEach((item) => {
    calcBtns.push(
      <button
        className='button number'
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
      value='='
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
          <button className='button CE' onClick={() => setInput('')} value=''>
            CE
          </button>
          {/* add button */}
          <button
            className='button'
            onClick={(e) => setInput(input + e.target.value)}
            value='+'
          >
            +
          </button>

          {/* minus btn */}
          <button
            className='button'
            onClick={(e) => setInput(input + e.target.value)}
            value='-'
          >
            {' '}
            -{' '}
          </button>

          <button
            className='button'
            onClick={(e) => setInput(input + e.target.value)}
            value='*'
          >
            {' '}
            *
          </button>

          <button
            className='button'
            onClick={(e) => setInput(input + e.target.value)}
            value='/'
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

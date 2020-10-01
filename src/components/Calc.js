import React, { useState } from 'react';

// import "./css/Calc.css";

function Calc() {
  /* eslint no-eval: 0 */

  const [input, setInput] = useState('');
  const calcBtns = [];
  ['(', ')', '%', 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.'].forEach((item) => {
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
      className='button equal'
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
    <div className='calculator-buttons'>
      <div className='calculator'>
        {' '}
        <div className='show-input'>{input}</div>
        <div className='digits'>{calcBtns}</div>
        <div className='modifiers subgrid'>
          {/* clear button */}

          <button
            className='button delete'
            onClick={() => setInput(input.substr(0, input.length - 1))}
          >
            Delete
          </button>

          {/* clear all */}
          <button className='button' onClick={() => setInput('')} value=''>
            AC
          </button>
        </div>
        <div className='operations button'>
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
      </div>
    </div>
  );
}

export default Calc;

import React from 'react';

function DigitButton(props) {
  const { value } = props;

  return (
    value === '=' ?
        <button
      className='button number'
      // onClick={(e) => {
      //   try {
      //     setInput(
      //       String(eval(input)).length > 3 && String(eval(input)).includes('.')
      //         ? String(eval(input).toFixed(4))
      //         : String(eval(input))
      //     );
      //   } catch (e) {
      //     console.log(e);
      //   }
      // }}
      value='='
      id='equal'
    >
      =
    </button>
    :
    <button
      className='button number'
      id={`digit_${value}`}
    //   onClick={(e) => {
    //     action(input + e.target.value);
    //   }}
    //   value={value}
      key={value}
    >
      {' '}
      {value}
    </button>
  );
}

export default DigitButton;

import React from 'react';

function OperationButton(props) {
  const { type, value} = props;
  
  return (
    <button
      className='button number op'
      id={`op_${type}`}
      // onClick={(e) => {
      //   action(input + e.target.value);
      // }}
      // value={value}
      key={value}
    >
      {' '}
      {value}
    </button>
  );
}

export default OperationButton;

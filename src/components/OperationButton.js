import React from 'react';

function OperationButton(props) {
  const { type, value, onClick } = props;

  return (
    <button
      className='button number op'
      id={`op_${type}`}
      value={value}
      key={value}
      onClick={onClick}
    >
      {' '}
      {value}
    </button>
  );
}

export default OperationButton;

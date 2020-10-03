import React from 'react';

function MathOperation(props) {
  const { value, type, onClick } = props;

  return (
    <button
      className={`button ${type}`}
      value={value ? value : type}
      id={`op_${type}`}
      onClick={onClick}
    >
      {value ? value : type}
    </button>
  );
}

export default MathOperation;

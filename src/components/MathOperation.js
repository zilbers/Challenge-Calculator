import React from 'react';

function MathOperation(props) {
  const { value, type } = props;

  return (
    <button
      className={`button ${type}`}
      value=''
      id={`op_${type}`}
    >
      {value ? value : type}
    </button>
  );
}

export default MathOperation;

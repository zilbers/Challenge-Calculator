import React from 'react';

const operations = {
  leftParentheses: {
    value: '(',
    className: 'button number op',
    id: 'op_leftParentheses',
  },
  rightParentheses: {
    value: ')',
    className: 'button number op',
    id: 'op_rightParentheses',
  },
  modulo: { value: '%', className: 'button number op', id: 'op_modulo' },
};

export const operationTypes = Object.keys(operations);

export function Digit(props) {
  const { type, onClick } = props;
  const { value, className, id } = operations[type];

  return (
    <button
      className={className}
      id={id}
      value={value}
      key={value}
      onClick={onClick}
    >
      {' '}
      {value}
    </button>
  );
}

import React from 'react';

const Input = props => {
  return (
    <input
      className={props.className}
      type="text"
      onChange={props.onChange}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
};

export default Input;

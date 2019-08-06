import React from 'react';

const Select = ({ items }) => {
  return (
    <div className="input">
      <div className="container">
        <input
          list="country"
          placeholder="select one"
          className="input__field"
        />
        <datalist id="country">{items}</datalist>
      </div>
    </div>
  );
};

export default Select;

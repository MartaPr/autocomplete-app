import React from 'react';

const Selected = props => {
  return (
    <section className="selected">
      <div className="selected__selected-container">
        <h1 className="selected__header">Selected item:</h1>
        <p className="item">{props.value}</p>
      </div>
    </section>
  );
};

export default Selected;

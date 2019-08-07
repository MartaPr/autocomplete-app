import React from 'react';

const Selected = props => {
  const selectedItems = props.tags.map((item, i) => {
    return <li key={i}>{item}</li>;
  });
  return (
    <section className="selected">
      <h1 className="selected__header">Selected items</h1>
      <ul>{selectedItems}</ul>
    </section>
  );
};

export default Selected;

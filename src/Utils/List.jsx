import React from 'react';

const List = props => {
  const items = props.countries.map((item, i) => {
    return (
      <div
        onClick={() => props.getSelected(item.name)}
        className="select__list-container--item"
        key={i}
      >
        {item.name}
      </div>
    );
  });

  return <div className="select__list-container">{items}</div>;
};

export default List;

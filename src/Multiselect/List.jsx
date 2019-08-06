import React from 'react';

const List = props => {
  const items = props.countries.map(item => {
    return (
      <div
        onClick={props.getSelected}
        className="select__list-container--item"
        key={item.name}
      >
        {item.name}
      </div>
    );
  });

  return <div className="select__list-container">{items}</div>;
};

export default List;

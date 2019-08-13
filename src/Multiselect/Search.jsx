import React from 'react';
import List from '../Utils/List';
import img from '../img/section.jpg';

const Search = props => {
  const items = props.tags.map((tag, i) => {
    return (
      <div className="select-multi__input-tag--item" key={i}>
        {tag}
        <button className="remove-tag" onClick={() => props.onClick(i)} />
      </div>
    );
  });
  return (
    <section
      className="select-multi"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="container container-flex">
        <h2>Lorem ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
          tincidunt leo. Fusce iaculis nunc in dictum rhoncus. Pellentesque
          convallis vulputate diam.
        </p>
        <div className="select-multi__input-tag">
          {items}
          <div className="select-multi__input-wrapper">
            <input
              className="select-multi__input-wrapper--input"
              onChange={props.onChange}
              onBlur={props.onBlur}
              onFocus={props.onFocus}
              placeholder="Select Multiple..."
              value={props.value}
            />

            <div className={props.className}>
              <List
                countries={props.countries}
                getSelected={props.getSelected}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;

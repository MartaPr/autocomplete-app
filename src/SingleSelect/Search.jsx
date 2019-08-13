import React from 'react';
import List from '../Utils/List';

const Search = props => {
  return (
    <section className="select">
      <div className="container">
        <div className="select__input-wrapper">
          <input
            className="select__input-wrapper--input"
            onChange={props.onChange}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            placeholder="Select One..."
            value={props.value}
          />
        </div>
      </div>
      <div className={props.className}>
        <List countries={props.countries} getSelected={props.getSelected} />
      </div>
    </section>
  );
};

export default Search;

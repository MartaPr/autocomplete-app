import React from 'react';
import List from '../Utils/List';
import img from '../img/section1.jpg';

const Search = props => {
  return (
    <section
      className="select"
      style={{
        backgroundImage: `url(${img})`
      }}
    >
      <div className="container input-container">
        <div className="select__input-box">
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
            tincidunt leo. Fusce iaculis nunc in dictum rhoncus. Pellentesque
            convallis vulputate diam.
          </p>
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
          <div className={props.className}>
            <List countries={props.countries} getSelected={props.getSelected} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;

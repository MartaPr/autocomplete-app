import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import DataList from '../Autocomplete';
import Multiselect from '../Multiselect/List';

const Header = () => {
  return (
    <BrowserRouter>
      <header className="header">
        <div className="container">
          <div className="header__links">
            <Link className="header__links-item" to="/">
              Select
            </Link>
            <Link className="header__links-item" to="/multiselect">
              Multiselect
            </Link>
          </div>
        </div>
      </header>
      <div>
        <Route exact path="/" component={DataList} />
        <Route exact path="/multiselect" component={Multiselect} />
      </div>
    </BrowserRouter>
  );
};

export default Header;

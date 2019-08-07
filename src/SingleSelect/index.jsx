import React, { Component } from 'react';
import API from '../Utils/API';
import List from '../Utils/List';
import Input from '../Utils/Input';
import Selected from './Selected';

class SingleSelect extends Component {
  state = {
    countries: [],
    filteredItems: [],
    isOpen: false,
    value: ''
  };

  async componentDidMount() {
    let countries = await API.get('/', {
      params: {
        results: 1
      }
    });
    this.setState({
      countries: countries.data
    });
  }

  handleSearch = event => {
    let keyword = event.target.value;
    let filteredItems = this.state.countries.filter(item => {
      let searchItem = item.name.toLowerCase();
      return searchItem.match(keyword.toLowerCase());
    });
    this.setState({
      filteredItems,
      value: keyword
    });
  };

  getSelected = val => {
    this.setState({
      value: val
    });
  };

  onBlur = () => {
    setTimeout(() => {
      this.setState({
        isOpen: false
      });
    }, 300);
  };

  onFocus = () => {
    this.setState({
      isOpen: true
    });
  };

  render() {
    let { filteredItems } = this.state;
    let { countries } = this.state;
    return (
      <section className="select">
        <div className="container">
          <div className="select__input-wrapper">
            <Input
              className="select__input-wrapper--input"
              onChange={this.handleSearch}
              onBlur={this.onBlur}
              onFocus={this.onFocus}
              placeholder="Select One..."
              value={this.state.value}
            />
            <Selected value={this.state.value} />
          </div>

          <div
            className={
              this.state.isOpen ? 'select__list' : 'select__list--hidden'
            }
          >
            <List
              countries={filteredItems.length === 0 ? countries : filteredItems}
              getSelected={this.getSelected}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default SingleSelect;

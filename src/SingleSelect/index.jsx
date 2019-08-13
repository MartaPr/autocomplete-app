import React, { Component } from 'react';
import API from '../Utils/API';
import Search from './Search';
import Selected from './Selected';
class SingleSelect extends Component {
  state = {
    countries: [],
    filteredItems: [],
    tags: [],
    isOpen: false,
    value: '',
    keyword: ''
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
      keyword
    });
  };

  getSelected = val => {
    this.setState({
      value: val,
      keyword: val
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
      <div>
        <Search
          onChange={this.handleSearch}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          value={this.state.keyword}
          getSelected={this.getSelected}
          selected={this.state.value}
          countries={filteredItems.length === 0 ? countries : filteredItems}
          className={
            this.state.isOpen ? 'select__list' : 'select__list--hidden'
          }
        />
        <Selected selected={this.state.value} />
      </div>
    );
  }
}

export default SingleSelect;

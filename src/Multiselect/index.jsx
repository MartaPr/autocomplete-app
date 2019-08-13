import React, { Component } from 'react';
import API from '../Utils/API';
import Search from './Search';
import Selected from './Selected';

class MultiSelect extends Component {
  _isMounted = false;
  state = {
    countries: [],
    filteredItems: [],
    tags: [],
    isOpen: false,
    value: ''
  };

  async componentDidMount() {
    this._isMounted = true;
    let countries = await API.get('/', {
      params: {
        results: 1
      }
    });
    if (this._isMounted) {
      this.setState({
        countries: countries.data
      });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
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
    const newCountries = [...this.state.countries];
    newCountries.splice(val, 1);
    if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
      return;
    }
    this.setState({
      tags: [...this.state.tags, val],
      countries: newCountries,
      value: ''
    });
  };

  removeTag = i => {
    const newTags = [...this.state.tags];
    newTags.splice(i, 1);
    this.setState({
      tags: newTags
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
          countries={filteredItems.length === 0 ? countries : filteredItems}
          className={this.state.isOpen ? 'list' : 'hidden'}
          tags={this.state.tags}
          onClick={this.removeTag}
        />
        <Selected tags={this.state.tags} />
      </div>
    );
  }
}

export default MultiSelect;

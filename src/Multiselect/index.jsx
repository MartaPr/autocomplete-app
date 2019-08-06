import React, { Component } from 'react';
import axios from 'axios';
import List from './List';

class Autocomplete extends Component {
  state = {
    countries: [],
    filteredItems: [],
    isOpen: false,
    value: ''
  };

  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(data => {
        this.setState({
          countries: data.data
        });
      })
      .catch(err => {
        console.log('error', err);
      });
  }

  handleSearch = event => {
    let keyword = event.target.value;
    console.log(keyword);
    let filteredItems = this.state.countries.filter(item => {
      let searchItem = item.name.toLowerCase();
      return searchItem.match(keyword.toLowerCase());
    });
    this.setState({
      filteredItems
    });
  };

  getSelected = event => {
    console.log('value', event.currentTarget.textContent);
    this.setState({
      value: event.currentTarget.textContent
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
    let listFiltered = this.state.filteredItems;
    let listWhole = this.state.countries;
    return (
      <section className="select">
        <div className="container">
          <input
            className="select__input"
            type="text"
            onChange={this.handleSearch}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            placeholder="select"
            value={this.state.value}
          />
          <div
            className={
              this.state.isOpen ? 'select__list' : 'select__list--hidden'
            }
          >
            <List
              countries={listFiltered.length === 0 ? listWhole : listFiltered}
              getSelected={this.getSelected}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Autocomplete;

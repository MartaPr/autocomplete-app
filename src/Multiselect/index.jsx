import React, { Component } from 'react';
import List from '../Utils/List';
import Input from '../Utils/Input';
import API from '../Utils/API';
import Selected from '../Multiselect/Selected';

class MultiSelect extends Component {
  state = {
    countries: [],
    filteredItems: [],
    tags: [],
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

  printValue = () => {
    return this.state.value;
  };

  render() {
    let { filteredItems } = this.state;
    let { countries } = this.state;
    return (
      <section className="select-multi">
        <div className="container-flex">
          <div className="select-multi__input-tag">
            {this.state.tags.map((tag, i) => (
              <div className="select-multi__input-tag--item" key={i}>
                {tag}
                <button
                  className="remove-tag"
                  onClick={() => this.removeTag(i)}
                />
              </div>
            ))}
            <div className="select-multi__input-wrapper">
              <Input
                className="select-multi__input-wrapper--input"
                onChange={this.handleSearch}
                onBlur={this.onBlur}
                onFocus={this.onFocus}
                placeholder="Select Multiple..."
                value={this.state.value}
              />

              <div className={this.state.isOpen ? 'list' : 'hidden'}>
                <List
                  countries={
                    filteredItems.length === 0 ? countries : filteredItems
                  }
                  getSelected={this.getSelected}
                />
              </div>
            </div>
          </div>

          <Selected tags={this.state.tags} />
        </div>
        {/*               <Selected tags={this.state.tags} /> */}
      </section>
    );
  }
}

export default MultiSelect;

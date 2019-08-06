import React, { Component } from 'react';
import axios from 'axios';
// import Select from './Select';
import Autocomplete from '../Multiselect';

class DataList extends Component {
  state = {
    countries: []
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

  // searchCountry = name => {
  //   axios
  //     .get(`https://restcountries.eu/rest/v2/name/${name}`)
  //     .then(data => {
  //       this.setState({
  //         countries: data.data.result
  //       });
  //     })
  //     .catch(err => {
  //       console.log('err', err);
  //     });
  // };

  getItems = () => {
    let items = this.state.countries;
    return items.map(item => (
      <option className="input__field-item" key={item.name}>
        {item.name}
      </option>
    ));
  };

  render() {
    return (
      <div>
        {/* <Select items={this.getItems()} /> */}
        <Autocomplete />
      </div>
    );
  }
}

export default DataList;

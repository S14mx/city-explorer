import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Results from './Results'
import Container from 'react-bootstrap/Container';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedCity: 'Seattle',
      locationObj: {}
    }
  }

  

  saveSearchedCity = (event) => {
    this.setState({ searchedCity: event.target.value })
    console.log('hi', event.target.value);
  };

  getLocationObj = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchedCity}&format=json`;
    console.log(url)
    const response = await axios.get(url);
    this.setState({ locationObj: response.data[0] });
    console.log(this.state.locationObj)
  }

  
  render() {
    return (
      <Container className="App">
        <SearchBar saveSearchedCity={this.saveSearchedCity} getLocationObj={this.getLocationObj}/>
        <Results />
      </Container>
    );
  }
}

export default App;

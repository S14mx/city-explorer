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
      locationObj: []
    }
  }

  getLocationObj = async (searchedCity) => {
    try {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${searchedCity}&format=json`;
    const response = await axios.get(url);
    this.setState({ locationObj: response.data });
    } catch(err) {
    console.error(err);
  }
  }

  
  render() {
    const appStyle = {
      minHeight: '100vh',
      backgroundColor: 'ivory'
    }
    return (
      <Container style={appStyle} className="App">
        <SearchBar getLocationObj={this.getLocationObj}/>
        {this.state.locationObj.length > 0 &&
        <Results locationObj={this.state.locationObj}/>}
      </Container>
    );
  }
}

export default App;

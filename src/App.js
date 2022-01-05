import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Results from './Results'
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationObj: [],
      error: ''
    } 
  }

  getLocationObj = async (searchedCity) => {
    try {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${searchedCity}&format=json`;
    const response = await axios.get(url);
    this.setState({ locationObj: response.data });
    this.setState({ error: ''})
    } catch(err) {
      this.setState({ error: err.response.status + ': '+ err.response.data.error});
  }
  }

  
  render() {
    const appStyle = {
      minHeight: '100vh',
      backgroundColor: 'ivory'
    }
    const alertStyle = {
      paddingTop: '3rem'
    }
    return (
      <Container style={appStyle} className="App">
        <SearchBar getLocationObj={this.getLocationObj}/>
        <Alert style={alertStyle} variant='warning'>
        {this.state.error}
        </Alert>
        {this.state.locationObj.length > 0 &&
        <Results locationObj={this.state.locationObj}/>}
      </Container>


    );
  }
}

export default App;

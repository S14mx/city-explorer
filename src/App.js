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
      weatherObj: [],
      moviesObj: [],
      error: '',
      loading: {
        movies: true,
        location: true,
        forecast: true
      }
    }
  }

  getLocationObj = async (searchedCity) => {
    try {
      this.setState({ loading: { ...this.state.loading, location: true } });
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${searchedCity}&format=json`;
      const response = await axios.get(url);
      this.setState({ locationObj: response.data });
      this.setState({ loading: { ...this.state.loading, location: false } })
      this.setState({ error: '' })
    } catch (err) {
      this.handleError(err);
    }
  }

  getForecastObj = async (locationObj, searchedCity) => {
    try {
      this.setState({ loading: { ...this.state.loading, forecast: true } });
      const url = `${process.env.REACT_APP_SERVER_URL}/weather?lat=${locationObj.lat}&lon=${locationObj.lon}&searchQuery=${searchedCity}`;
      const response = await axios.get(url);
      this.setState({ weatherObj: [...this.state.weatherObj, ...response.data] });
      this.setState({ loading: { ...this.state.loading, forecast: false } })
    } catch (err) {
      this.handleError(err);
    }
  }

  getMoviesObj = async (searchedCity) => {
    try {
      this.setState({ loading: { ...this.state.loading, movies: true } });
      const url = `${process.env.REACT_APP_SERVER_URL}/movies?searchQuery=${searchedCity}`
      const response = await axios.get(url);
      this.setState({ moviesObj: response.data });
      this.setState({ loading: { ...this.state.loading, movies: false } })
    } catch (err) {
      this.handleError(err);
    }
  }

  clearWeatherObj = () => this.setState({ weatherObj: [] });

  handleError = (err) => this.setState({ error: err.response.status + ': ' + err.response.data.error });

  render() {
    const appStyle = {
      minHeight: '100vh',
      minWidth: '100vw',
      backgroundColor: 'ivory'
    }
    const alertStyle = {
      marginTop: '3rem'
    }
    return (
      <Container style={appStyle} className="App">
        <SearchBar getLocationObj={this.getLocationObj} getForecastObj={this.getForecastObj} getMoviesObj={this.getMoviesObj} locationObj={this.state.locationObj} clearWeatherObj={this.clearWeatherObj} />
        {this.state.error &&
          <Alert style={alertStyle} variant='warning'>
            {this.state.error}
          </Alert>}
        {(!this.state.error && this.state.locationObj.length > 0) &&
          <Results locationObj={this.state.locationObj} weatherObj={this.state.weatherObj} moviesObj={this.state.moviesObj} loading={this.state.loading} />}
      </Container>
    );
  }
}

export default App;

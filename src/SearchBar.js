import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedCity: ''
    }
  }

  saveSearchedCity = (event) => {
    this.setState({ searchedCity: event.target.value.toLowerCase() })
  };

  handleClick = async () => {
    this.props.clearWeatherObj()
    await this.props.getLocationObj(this.state.searchedCity)
    this.props.locationObj.forEach(obj => this.props.getForecastObj(obj, this.state.searchedCity))
  }

  render() {
    return (
      <Container style={{ paddingTop: '5rem' }} className="SearchBar">
        <Form>
          <Form.Group className="mb-3" controlId="text">
            <Form.Label></Form.Label>
            <Form.Control onChange={this.saveSearchedCity} size="lg" type="text" placeholder="Enter city name"></Form.Control>
            <Button style={{ margin: '2rem' }} onClick={this.handleClick} variant="primary">Explore!</Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default SearchBar;
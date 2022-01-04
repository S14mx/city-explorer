import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';

class SearchBar extends React.Component {
  render() {
    const { saveSearchedCity, getLocationObj } = this.props
    return (
      <Container className="SearchBar">
        <Form>
          <Form.Group className="mb-3" controlId="text">
            <Form.Label></Form.Label>
            <Form.Control onChange={saveSearchedCity}size="lg" type="text" placeholder="Enter city name"></Form.Control>
            <Button onClick={getLocationObj} variant="primary">Explore!</Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default SearchBar;
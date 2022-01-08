import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {
  render() {
    const filteredData = this.props.weatherObj.filter(obj => obj.lat === this.props.lat && obj.lon === this.props.lon)
    if (filteredData.length === 0) return <p>No forecast available</p>;

    return (
      <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} className="Weather">
        {filteredData.map(({ date, desc }) => (
          <Card style={{ width: '10rem', margin: '1rem' }} key={date}>
            <Card.Body>
              <Card.Title>{date}</Card.Title>
              <Card.Text>{desc}</Card.Text>
            </Card.Body>
          </Card>
        ))
        }
      </Container>
    );
  }
}

export default Weather;
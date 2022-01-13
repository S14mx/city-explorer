import React from 'react';
import Card from 'react-bootstrap/Card';


class WeatherDay extends React.Component {
  render() {
    const { date, desc } = this.props.dailyWeatherData;
    return (
      <Card style={{ width: '10rem', margin: '5rem 1rem 0rem 1rem' }}>
        <Card.Body>
          <Card.Title>{date}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default WeatherDay;






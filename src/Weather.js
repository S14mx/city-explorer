import React from 'react';
import Container from 'react-bootstrap/Container';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
  render() {
    const filteredData = this.props.weatherObj.filter(obj => obj.lat === this.props.lat && obj.lon === this.props.lon)
    if (filteredData.length === 0) return <p>No forecast available</p>;

    return (
      <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} className="Weather">
        {filteredData.map((dailyWeatherData, idx) => (
          <WeatherDay dailyWeatherData={dailyWeatherData} key={idx} />
        ))}
      </Container>
    );
  }
}

export default Weather;
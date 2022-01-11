import React from 'react';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Weather from './Weather';
import Movies from './Movies'
import Spinner from 'react-bootstrap/Spinner'


class Results extends React.Component {
  render() {
    return (
      <Container className="Results">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {this.props.loading.movies &&
            <Spinner animation='border' role='status'> </Spinner>}
          {this.props.loading.forecast &&
            <Spinner animation='border' role='status'> </Spinner>}
          {this.props.loading.location &&
            <Spinner animation='border' role='status'> </Spinner>}
        </div>
        {this.props.moviesObj.length > 0 &&
          <Movies moviesObj={this.props.moviesObj} />}
        {this.props.locationObj.map(({ display_name, lat, lon, place_id }) => (
          <div key={place_id}>
            <Weather weatherObj={this.props.weatherObj} lat={lat} lon={lon} />
            <Figure style={{ margin: '0rem 5rem' }} >
              <Figure.Caption style={{ padding: '2rem' }}>{`Location: ${display_name}.`}<br /> {`Latitude: ${lat}.`}<br /> {`Longitude: ${lon}.`} </Figure.Caption>
              <Figure.Image fluid style={{ boxShadow: '5px, 5px' }} src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${lat},${lon}&zoom=8}`} alt={display_name} />
            </Figure>
          </div>
        ))}
      </Container>
    );
  }
}

export default Results;

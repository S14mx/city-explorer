import React from 'react';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Weather from './Weather';


class Results extends React.Component {
  render() {
    return (
      <Container className="Results">
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

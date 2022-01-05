import React from 'react';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';


class Results extends React.Component {
  render() {
    return (
      <Container className="Results">
        {this.props.locationObj.map(({ display_name, lat, lon, place_id }) => (
          <Figure style={{margin: '0rem 5rem'}}key={place_id}>
            <Figure.Caption style={{ padding: '2rem'}}>{`Location: ${display_name}.`}<br/> {`Latitude: ${lat}.`}<br/> {`Longitude: ${lon}.`} </Figure.Caption>
            <Figure.Image fluid style={{ boxShadow: '5px, 5px'}} src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${lat},${lon}&zoom=8}`} alt={display_name}/>
          </Figure>
        ))}
      </Container>
    );
  }
}

export default Results;

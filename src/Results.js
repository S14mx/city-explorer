import React from 'react';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';


class Results extends React.Component {
  render() {
    return (
      <Container className="Results">
        {this.props.locationObj.map(({ display_name, lat, lon, place_id }) => (
          <Figure key={place_id}>
            <Figure.Caption>{`Location: ${display_name}.`}<br/> {`Latitude: ${lat}.`}<br/> {`Longitude: ${lon}.`} </Figure.Caption>
            <Figure.Image fluid src={''}/>
          </Figure>
        ))}
      </Container>
    );
  }
}

export default Results;
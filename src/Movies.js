import React from 'react';
import Container from 'react-bootstrap/Container';
import Movie from './Movie'

class Movies extends React.Component {
  render() {

    return (
      <Container className="Movies">
        {this.props.moviesObj.map((movieData, idx) => (
          <Movie movieData={movieData} key={idx} />
        ))}
      </Container>
    );
  }
}

export default Movies;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from 'react-bootstrap';

class Movies extends React.Component {
  render() {

    return (
      <Container className="Movies">
        {this.props.moviesObj.map(({ avgVotes, image, overview, popularity, releaseDate, title, totalVotes }, idx) => (
          <Card style={{ display: 'flex', alignItems: 'center', maxWidth: '500px', margin: '5rem auto' }} key={idx}>
            <Card.Img style={{ maxWidth: '200px' }} src={image ? `https://image.tmdb.org/t/p/w500${image}` : 'https://www.wisc-online.com/Images/NoImageAvailable.png'} alt={title} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{overview}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Release date: {releaseDate}</ListGroupItem>
              <ListGroupItem>Popularity: {popularity}</ListGroupItem>
              <ListGroupItem>Avarage Votes: {avgVotes}</ListGroupItem>
              <ListGroupItem>Total Votes: {totalVotes}</ListGroupItem>
            </ListGroup>
          </Card>
        ))
        }
      </Container>
    );
  }
}

export default Movies;
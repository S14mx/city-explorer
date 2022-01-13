import React from 'react';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import ListGroupItem from 'react-bootstrap/ListGroup';


 class Movie extends React.Component {
  render() {
    const { title, overview, releaseDate, popularity, avgVotes, totalVotes, image } = this.props.movieData;
    return (
      <Card style={{ display: 'flex', alignItems: 'center', maxWidth: '500px', margin: '5rem auto' }}>
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
    )
  }
}

export default Movie;
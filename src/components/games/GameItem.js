import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function GameItem({id, image, name, rating, release }){
    return (
        <Card key={id} style={{ width: '18rem', marginTop: '20px'}}>
            <Card.Img variant="top" src={image} style={{width: '100%', height: '200px', objectFit: 'cover', textAlign: 'center'}} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Released: {release}</ListGroup.Item>
                    <ListGroup.Item>Rating: {rating}</ListGroup.Item>
                </ListGroup>
                    <Link to={"specific/" + id}>
                        <Button variant="secondary" block>
                            Read More
                        </Button>
                    </Link>
                </Card.Body>
        </Card>
    )
}
GameItem.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
};
export default GameItem;
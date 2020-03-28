import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function GameItem({id, image, name, rating, release }){
    return (
            <div style={{width: '200px'}} className="gameContainer" key={id} style={{backgroundImage: "url(" + image + ")"}}>
                <h2>{name}</h2>
                <p>Released: {release}</p>
                <p>Rating {rating} / 5</p>
                <Link to={"specific/" + id}>
					<Button variant="secondary" block>
						Read More
					</Button>
				</Link>
            </div>
    )
}
GameItem.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired
};
export default GameItem;
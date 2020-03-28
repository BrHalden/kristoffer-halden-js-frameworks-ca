import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GameItem from './GameItem.js';
import Search from '../games/Search'
import { API_URL } from "../../constants/api.js";

export default function ListGames() {
    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(json => {
                setGames(json.results);
                setFilteredGames(json.results);
            })
            .catch(error => console.log(error));
    }, []);
    console.log(games)
    const filterGames = function(e) {
		const searchValue = e.target.value.toLowerCase();
		const filteredArray = games.filter(function(game) {
			const lowerCaseName = game.name.toLowerCase();
			if (lowerCaseName.startsWith(searchValue)) {
				return true;
			}
			return false;
		});

		setFilteredGames(filteredArray);
	};

    return (
        <>
            <Search handleSearch={filterGames} />
            <Row>
                {filteredGames.map(game => {
                    const {id, name, background_image, released, rating} = game;
                    //console.log(id)
                    return (
                        <Col>
                            <GameItem 
                            id={id}
                            name={name} 
                            image={background_image} 
                            release={released}
                            rating={rating}></GameItem>
                        </Col>
                    )
                })}
            </Row>
        </>
    );
}
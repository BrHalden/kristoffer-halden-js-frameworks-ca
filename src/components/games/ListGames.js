import React, { useState, useEffect } from "react";
import GameItem from './GameItem.js'
import { API_URL } from "../../constants/api.js";

export default function CharacterList() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(json => setGames(json.results))
            .catch(error => console.log(error));
    }, []);
    console.log(games)
    return (
        <div className="gamesList">
            {games.map(game => (
                    <GameItem 
                    key={game.id} 
                    name={game.name} 
                    img={game.background_image} 
                    release={game.released}
                    rating={game.rating}></GameItem>
            ))}
        </div>
    );
}
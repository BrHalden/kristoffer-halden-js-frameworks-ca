import React from 'react';

export default function GameItem(props){
    return (
            <div className="gameContainer" key={props.id} style={{backgroundImage: "url(" + props.img + ")"}}>
                <h1>{props.name}</h1>
                <p>Released: {props.release}</p>
                <p>Rating {props.rating} / 5</p>
            </div>
    )
};
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ListGames from '../games/ListGames.js'

export default function (props) {
    return (
        <ListGames></ListGames>
    )
}
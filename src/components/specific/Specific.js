import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { API_URL } from "../../constants/api.js";
import dangerouslySetInnerHTML from 'dangerously-set-inner-html'
import Jumbotron from 'react-bootstrap/Jumbotron'

function createMarkup(description) {
	return {__html: description};
  }  

function Specific() {
	const [specific, setSpecific] = useState(null);
	const [loading, setLoading] = useState(true);
    let { id } = useParams();
    console.log(id)
	const url = API_URL + '/' + id;
	console.log(url)
	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(json => setSpecific(json))
			.catch(error => console.log(error))
			.finally(() => setLoading(false));
	}, [url]);
	console.log(specific)
	if (loading) {
		return <Spinner animation="border" className="spinner" />;
	}
	return (
		<>
			<div className='hero' style={{backgroundImage: 'url(' + specific.background_image + ')'}}></div>	
			<h1 className="margin-top">{specific.name}</h1>
			<div className="specific_text margin-top margin-bot" dangerouslySetInnerHTML={createMarkup(specific.description)}/>
			<a href={specific.website} target="_blank">
				{specific.website}
			</a>
		</>
	);
}

export default Specific;
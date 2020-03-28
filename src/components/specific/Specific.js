import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { API_URL } from "../../constants/api.js";

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
		<Row>
			{console.log(specific)}
			<Col md={6} className="specific-image">
				<Image src={specific.background_image} />
			</Col>
			<Col>
				<h1>{specific.name}</h1>
				<p>
					{specific.description}
				</p>
				<a href={specific.website}>
					{specific.website}
				</a>
			</Col>
		</Row>
	);
}

export default Specific;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { API_URL } from "../../constants/api.js";

function createMarkup(description) {
	return {__html: description};
  }  

function Specific() {
	const [specific, setSpecific] = useState(null);
	const [loading, setLoading] = useState(true);
    let { id } = useParams();
	const url = API_URL + '/' + id;
	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(json => setSpecific(json))
			.catch(error => console.log(error))
			.finally(() => setLoading(false));
	}, [url]);
	if (loading) {
		return <Spinner animation="border" className="spinner" />;
	}
	return (
		<>
			<div className='hero' style={{backgroundImage: 'url(' + specific.background_image + ')'}}></div>	
			<h1 className="margin-top">{specific.name}</h1>
			<div className="specific_text margin-top margin-bot" dangerouslySetInnerHTML={createMarkup(specific.description)}/>
			<a href={specific.website} rel='noopener'>
				{specific.website}
			</a>
		</>
	);
}

export default Specific;
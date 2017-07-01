import React from "react";
import {render} from "react-dom";

const Data = ({data}) => {
	return(<li>{data.description}</li>);
}

export const GenerateData = ({records}) => {
		const AllRecords = records.map((data, index) => {
			return(<Data key={index} data={data} />);
		});
	return (
		<ul>{AllRecords}</ul>
		);
}
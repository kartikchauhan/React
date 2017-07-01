import React from "react";
import ReactDOM, {render} from "react-dom";

import {GenerateData} from './components/GenerateData';

class App extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			records: []
		}
	}

	fetchData()
	{
		let query = ReactDOM.findDOMNode(this.refs.query).value;
		console.log(query);
		let category = ReactDOM.findDOMNode(this.refs.category).value;
		console.log(category);

		let url = "https://itunes.apple.com/search?term=" + query + "&country=us&entity=" + category;
		console.log(url);
		const obj = this;	// need to find the best way to perform this operation
		$.ajax({
			type: 'GET',
			dataType: 'json',
			url: url,
			success: function(response) {
				console.log(response.results);
				obj.setState({
					records: response.results
				});
				console.log(obj.state.records);
			}
		});
	}

	render() 
	{
		return(
			<div>
				<input type="text" ref="query"/>
				<select ref="category">
					<option value="software">Apps</option>
					<option value="movie">Films</option>
				</select>
				<button onClick={this.fetchData.bind(this)}>Search</button>
				<GenerateData records={this.state.records} />
			</div>
		);
	}

}

render(<App />, window.document.getElementById("app"));

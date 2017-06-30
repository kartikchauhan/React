import React from "react";
import {render} from "react-dom";

import { Todo } from './components/Todo';
import { Todos } from './components/allTodos';

class App extends React.Component
{

	constructor(props)
	{
		super(props);
		this.state = {
			data: []
		}
		this.count = 0;
	}

	add(val)
	{
		if(val == '')
		{
			alert("Enter a value");
			return false;
		}
		this.state.data.push({value: val, id: this.count++});
		this.setState({
			data: this.state.data
		});
	}

	remove(id)
	{
		var newArr = this.state.data.filter((todo, index) => {
			if(index != id)
			{
				return todo;
			}
		});
		this.setState({
			data: newArr
		});
		this.count--;
	}

	render()
	{
		return(
			<div>
				<Todo add={this.add.bind(this)} />
				<Todos data={this.state.data} remove={this.remove.bind(this)} />
			</div>
			);
	}
}

render(<App />, window.document.getElementById("app"));

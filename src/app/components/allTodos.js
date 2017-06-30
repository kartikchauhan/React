import React from "react";
import {render} from "react-dom";

const SingleTodo = ({todo, remove}) => {
		return (<li onClick={() => {
					remove(todo.id);
				}}>{todo.value}</li>
			);

}

export const Todos = ({data, remove}) => {
	console.log(data);
	const TodoNodes = data.map((todo, index) => {
						return (<SingleTodo key={index} todo={todo} remove={remove}/>);
					});

	return(
		<ul>
			{TodoNodes}
		</ul>
		);
}
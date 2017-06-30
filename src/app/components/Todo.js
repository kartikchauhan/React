import React from "react";
import {render} from "react-dom";

export const Todo = ({add, remove}) => {
	let input;
	return (
			<div>
				<input type="text" ref={node => {
					input = node;
				}}/>
				<button onClick ={() => {
					add(input.value);
					input.value='';
				}}>
				New Todo</button>
			</div>
		);
}
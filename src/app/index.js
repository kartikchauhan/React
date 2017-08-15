import React from 'react';
import {render} from 'react-dom';
import Game from './components/game';

class Container extends React.Component
{
	render()
	{
		return(
			<Game rows={5} cols={5} />
		);
	}
}

render(<Container/>, window.document.getElementById("container"));
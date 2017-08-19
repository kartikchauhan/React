import React from 'react';
import Game from './game';

class Container extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {gameId: 1};
    }

    createNewGame()
    {
        this.setState({gameId: this.state.gameId + 1 });
    }

    render()
    {
        return(
            <Game key={this.state.gameId} rows={5} cols={5} activeCellsCount={5} maxWrongAttempts={2} createNewGame={this.createNewGame.bind(this)}/>
        );
    }
}

export default Container;
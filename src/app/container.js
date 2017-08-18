import React from 'react';
import Game from './game';

class Container extends React.Component
{
    render()
    {
        return(
            <Game rows={5} cols={5} activeCellsCount={5} maxWrongAttempts={2} />
        );
    }
}

export default Container;
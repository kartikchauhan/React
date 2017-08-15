import React from 'react';
import Rows from './rows';
import Cols from './cols';

class Game extends React.Component 
{
    render() 
    {
        let matrix = [], row;
        for (let r = 0; r < this.props.rows; r++) 
        {
            row = [];
            for (let c = 0; c < this.props.columns; c++) 
            {
                row.push(`${r}${c}`);
            }
            matrix.push(row);
        }
        return (
            <div className="grid">
                {matrix.map((row, ri) => (
                    <Rows key={ri}>
                        {row.map(cellId => <Cols key={cellId} id={cellId} />)}
                    </Rows>
                ))}
            </div>
        );
    }
}

export default Game;
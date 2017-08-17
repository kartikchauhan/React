import React from 'react';
import Cell from './cell';
import Row from './row';

class Game extends React.Component
{
    render()
    {
        let matrix = [], row;
        for(let r=0; r<this.props.rows; r++)
        {
            row = [];
            for(let c=0; c<this.props.cols; c++)
            {
                row.push(`${r}${c}`);
            }
            matrix.push(row);
        }

        return(
            <div className="grid">
                {matrix.map((row, ri) => (
                    <Row key={ri}>
                        {row.map(cellId => <Cell key={cellId} id={cellId} />)}
                    </Row>
                ))}
            </div>
        );
    }
}

export default Game;
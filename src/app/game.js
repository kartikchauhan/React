import React from 'react';
import Cell from './cell';
import Row from './row';
import Footer from './footer';

class Game extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            gameState: 'ready', // this will be the initial gameState
        };
    }

    // Once the first render of the grid gets complete ComponentDidMount will execute and change the state of the game
    // using setTimeOut
    componentDidMount()
    {
        setTimeout(() => { this.setState({gameState: 'memorize'}, () => {setTimeout( () => {this.setState({gameState: 'recall'})}, 2000)}  )},  2000);
    }

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
                <Footer gameState={this.state.gameState}/>
            </div>
        );
    }
}

export default Game;
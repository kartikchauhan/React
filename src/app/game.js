import React from 'react';
import _ from 'lodash';

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
        this.matrix = [];
        for(let r=0; r<this.props.rows; r++)
        {
            let row = [];
            for(let c=0; c<this.props.cols; c++)
            {
                row.push(`${r}${c}`);
            }
            this.matrix.push(row);
        }

        // flatten will convert the 2D matrix into a 1D array and return the array.
        let flattenedArray = _.flatten(this.matrix, true);
        // sampleSize will randomly pick specified number of elements from a given array and will return the new array
        this.activeCells = _.sampleSize(flattenedArray, this.props.activeCellsCount);
    }

    // Once the first render of the grid gets complete ComponentDidMount will execute and change the state of the game using setTimeOut
    // Callback for 'recall' state if in case setState => 'memorize' fails.
    // We don't want to jump to the subsequent state if a state fails to update 
    componentDidMount()
    {
        setTimeout(() => { this.setState({gameState: 'memorize'}, () => {setTimeout( () => {this.setState({gameState: 'recall'})}, 2000)}  )},  2000);
    }

    render()
    {
        return(
            <div className="grid">
                {this.matrix.map((row, ri) => (
                    <Row key={ri}>
                        {row.map(cellId => <Cell key={cellId} id={cellId} activeCells={this.activeCells} {...this.state} />)}
                    </Row>
                ))}
                <Footer gameState={this.state.gameState}/>
            </div>
        );
    }
}

export default Game;
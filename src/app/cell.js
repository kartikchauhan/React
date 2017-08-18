import React from 'react';

class Cell extends React.Component
{
    checkActive()
    {
        return this.props.activeCells.indexOf(this.props.id) > -1 ? true : false;
    }

    handleClick(id)
    {
        if(this.props.gameState == 'recall' && this.guessState()=== undefined)
        {
            this.props.recordAttempts({
                cellId: this.props.id,
                iscorrectAttempt: this.checkActive()
            });
        }
    }

    guessState()
    {
        if(this.props.correctAttempts.indexOf(this.props.id) > -1)
            return true;
        else if(this.props.wrongAttempts.indexOf(this.props.id) > -1)
            return false;
    }

    render()
    {
        let cellClass = "cell"; // this will be the default class for every cell present
        /* if the current gameState is 'memorize', the following condition will check for all the active cells & append the active
           class to those cells */
        if(this.props.gameState == 'memorize' && this.checkActive())    
        {
            cellClass += " active"; // 
        }

        if(this.guessState() === true)
            cellClass += " attempt-correct";
        else if(this.guessState() === false)
            cellClass += " attempt-wrong";

        return(
            <div className={cellClass} onClick={() => this.handleClick(this.props.id)}>
            </div>
        );
    }
}

export default Cell;
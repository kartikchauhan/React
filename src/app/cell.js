import React from 'react';

class Cell extends React.Component
{
    checkActive()
    {
        return this.props.activeCells.indexOf(this.props.id) > -1 ? true : false;
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

        return(
            <div className={cellClass}>
                {this.props.id}
            </div>
        );
    }
}

export default Cell;
import React from 'react';
import Refresh from 'react-icons/lib/fa/refresh';

class Footer extends React.Component
{

    playAgain()
    {
        if(this.props.gameState == 'won' || this.props.gameState == 'lost')
        {
            return(
                <div>Play Again &nbsp; <Refresh size={28} onClick={this.props.createNewGame} />
                </div>
            );
        }
    }
    
    remainingCount()
    {
        if(this.props.gameState != 'recall')
            return null;
        else
        {
            return(
                <div className = 'remainingCounts'>
                    <div className="grids-to-unlock">Remaining grids to unlock: {this.props.activeCellsCount - this.props.correctAttempts.length}</div>
                    <div className="chances-left">Remaining chances: {this.props.maxWrongAttempts - this.props.wrongAttempts.length}</div>
                </div>
            );
        }
    }

    render()
    {
        return(
            <div className="footer">
                <h3>{this.props.hints[this.props.gameState]}</h3>
                { this.remainingCount() }
                { this.playAgain() }
            </div>
        );
    }
}

// We'll use these hints to get the footer messages

Footer.defaultProps = {
    hints: {
        ready: 'Get Ready',
        memorize: 'Memorize now',
        recall: 'Recall all the blocks',
        won: "Hurray!! You won the game",
        lost: "Boo!! You lost the game"
    }
}

export default Footer;
import React from 'react';

class Footer extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div className="footer">
                <h3>{this.props.hints[this.props.gameState]}</h3>
            </div>
        );
    }
}

// We'll use these hints to get the footer messages

Footer.defaultProps = {
    hints: {
        ready: 'Get Ready',
        memorize: 'Memorize now',
        recall: 'Recall all the blocks'
    }
}

export default Footer;
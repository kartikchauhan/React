import React from 'react';

class Cols extends React.Component 
{
    render() 
    {
        return (
            <div className="cell">
                {this.props.id}
            </div>
        );
    }
}

export default Cols;
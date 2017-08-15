import React from 'react';

class Rows extends React.Component 
{
    render() 
    {
        return (
            <div className="row">
                {this.props.children}
            </div>
        );
    }
}
 
export default Rows;
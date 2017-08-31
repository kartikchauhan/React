import React from 'react';
import {render} from 'react-dom';
import {Button, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap/lib';

class FieldGroup extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <FormGroup id={this.props.id}>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl type={this.props.type} placeholder={this.props.placeholder} />
            </FormGroup>
        );
    }
}

class App extends React.Component
{
    render()
    {
        return(
            <div className="container">
               <form className="col-sm-4 col-sm-offset-4">
                    <FieldGroup id="formControlsText" 
                                label="First Name"
                                type="text"
                                placeholder="First Name" />
                    <FieldGroup id="formControlsText" 
                                label="Last Name"
                                type="text"
                                placeholder="Last Name" />
                    <FieldGroup id="formControlsEmail" 
                                label="Email"
                                type="email"
                                placeholder="Email" />
                    <FieldGroup id="formControlsPassword" 
                                label="Password"
                                type="password" 
                                placeholder="" />
                    <Button className="register-button" bsStyle="primary">Register</Button>
                </form>
            </div>
        );
    }
}

render(<App />, document.getElementById('container'));

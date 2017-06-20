import React from "react";

export class Home extends React.Component {
	constructor(props)
	{
		super();
		this.state = {
			age: props.user.age,
            homeLink: props.homeLink
		};
	}

	increaseAge()
	{
		this.setState({
			age: this.state.age + 3
		});
	}

    onChangeLink()
    {
        this.props.changelinkParent(this.state.homeLink);
    }

    changeInputValue(event)
    {
        this.setState({
            homeLink: event.target.value
        });
    }

    render() {
    	var userHobbies = [];
    	this.props.user.hobbies.forEach(function(value, index) {
        	userHobbies.push(<li>{value}</li>);
    	});
        return (
            <div>
                <p>In a new Component!</p>
                <h1>{"Home"}</h1>
                <p>User is {this.props.user.name}</p>
                <p>Users age is {this.state.age}</p>
                <h4>Users hobbies are:</h4>
                <ul>
                { this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>) }
                { /* above code can also be rewritten as below 
                this.props.user.hobbies.map(function(hobby) { return <li>{hobby}</li>})  */}
                </ul>
                <button type="button" className="btn btn-primary" onClick={ this.increaseAge.bind(this) }>Increase Age</button>
                <hr/>
                <input type="text" value={ this.state.homeLink } onChange={(event) => this.changeInputValue(event)}/>
                <hr/>
                <button type="button" className="btn btn-primary" onClick={ this.onChangeLink.bind(this) }>Change Link</button>
                <hr/>
            </div>
        );
    }
}

Home.propTypes = {
	name: React.PropTypes.string,
	age: React.PropTypes.number,
	user: React.PropTypes.object
};
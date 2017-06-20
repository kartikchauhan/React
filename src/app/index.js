import React from 'react';
import { render } from 'react-dom';

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    constructor()
    {
        super();
        this.state = {
            homeLink: "Home"
        }
    }

    changeLink(newLink)
    {
        this.setState({
            homeLink: newLink
        });
    }

    callParent()
    {
        alert("Test value is", this.getTestValue.bind(this));
    }

    getTestValue()
    {
        return 10;
    }
    render() {
        var user = {
            name: 'Kartik Chauhan',
            age: 21,
            hobbies: ['Programming', 'Gaming']
        },
        anotherUser = {
            name: 'Manish Singh',
            age: 30,
            hobbies: ['counter strike', 'Keynote speaking']
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homelink = { this.state.homeLink } />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home 
                            user = {user} 
                            anotherUser = {anotherUser} 
                            callParent = {this.callParent} 
                            changelinkParent = {this.changeLink.bind(this)}
                            homeLink= {this.state.homeLink}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));
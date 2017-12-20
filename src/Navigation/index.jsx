import React, { Component } from 'react';
import './Navigation.css';



class Navigation extends Component {

    render(props){
        return (
            <header className="app-nav">
                <div className="app-headline">
                    <h1>React Firebase App</h1>
                </div>
            </header>
        )
    }
}


export default Navigation;
import React, { Component } from 'react';
import './Navigation.css';



class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render(props){
        return (
            <header class="app-nav">
                <div class="app-headline">
                    <h1>React Firebase App</h1>
                </div>
            </header>
        )
    }
}


export default Navigation;
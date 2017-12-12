import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';
/* exercise, tranfer the necesary CSS from the static folder into Note.css */


class Note extends Component {
    constructor(props) {
        super(props);
        this.message = "This is how props work, props are used for data that does not change!"
        
    }

    render(props){
        return (
            /* add the HTML from the static folder into this component, change class to className and use a element wrapper */
            <h1>{this.message}</h1>
        )
    }
}


export default Note;
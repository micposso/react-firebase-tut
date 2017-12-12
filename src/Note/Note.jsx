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
            <div>
                <h1>{}</h1>
                <h2>{}</h2>
                <p>The user lives in: {}</p>
            </div>
        )
    }
}


export default Note;
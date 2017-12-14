import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';
/* exercise, tranfer the necesary CSS from the static folder into Note.css */



class Note extends Component {
    constructor(props) {
        super(props);
    }

    render(props){
        return (
            <div className="app-item-content">
                <div className="app-item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et libero sed est auctor accumsan.</div>
                <div className="app-item-close">+</div>
            </div>
        )
    }
}


export default Note;
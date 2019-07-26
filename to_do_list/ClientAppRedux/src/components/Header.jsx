import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css';
import PropTypes from 'prop-types';

export default function Header(props) {
    let selectedLink = props.currentRouterPath;

    const selectedStyle = {
        fontWeight: "bold"
    }

    return (
        <div className="center">
            <h1>To Do List</h1>
            <hr/>
            <Link style={selectedLink === '/' ? selectedStyle : null} className="link" to="/" >Home</Link> | <Link style={selectedLink === '/new-category' ? selectedStyle : null} className="link" to="/new-category" >New Category</Link>
            <hr />
        </div>
    )
}

Header.propTypes = {
    currentRouterPath: PropTypes.string.isRequired
}
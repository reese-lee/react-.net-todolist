import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css';

export default function Header() {

    return (
        <div className="center">
            <h1>To Do List</h1>
            <hr/>
            <Link className="link" to="/" >Home</Link> | <Link  className="link" to="/new-category" >New Category</Link>
            <hr />
        </div>
    )
}

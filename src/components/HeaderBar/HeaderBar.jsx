import React from "react";
import {Link} from 'react-router-dom'

function HeaderBar(){
    return(
        <nav>
            <span><h1>nameList</h1></span>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/namelist">Show name list</Link>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderBar
import React from "react";
import {Outlet, Link} from "react-router-dom";

function Layout(){
    return <>
    <nav>
        <ul>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/applications">APPLICATIONS</Link>
            </li>
            <li>
                <Link to="/projects">PROJECTS</Link>
            </li>
            <li>
                <Link to="/events">EVENTS</Link>
            </li>
            <li>
                <Link to="/blog">BLOG</Link>
            </li>
        </ul>
    </nav>
    <Outlet />
    </>
}

export default Layout;
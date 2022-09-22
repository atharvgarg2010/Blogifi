import React from 'react'
import Entitled from "./untitled.png";
import {Link} from 'react-router-dom'


import "./style.css"
function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <img src={Entitled} alt="D"/>
                <div>
                <Link className="button-48" role="button" to={"/login"}><span className="text">Login</span></Link>
                &nbsp;
                <Link className="button-48" role="button" to={"/signup"}><span className="text">Sign up</span></Link>
                &nbsp;

                <Link className="button-48" role="button" to={"/"}><span className="text">Home</span></Link>
                &nbsp;

                <Link className="button-48" role="button" to={"/Account"}><span className="text">Account</span></Link>
                &nbsp;

                <Link className="button-48" role="button" to={"/AddBlog"}><span className="text">Add Blog</span></Link>
                &nbsp;

                <Link className="button-48" role="button" to={"/Login"} onClick={localStorage.clear()}><span className="text">Log Out</span></Link>
                </div>

            </nav>
        </div>
    )
}

export default Navbar

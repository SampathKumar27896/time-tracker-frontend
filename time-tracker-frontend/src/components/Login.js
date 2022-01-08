import React from 'react';
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div>
            <form>
                <div className="loginForm">
                    <label className="heading-one form-heading">Login</label>
                    <input type="text" name="email" id="email" className="" placeholder="Email"></input>
                    <input type="password" name="password" id="password" className="" placeholder="Password"></input>
                    <div className="loginFormBtns">
                    <span><button className="secondary-btn cancel-btn">Cancel</button></span>
                    <span><button className="primary-btn login-btn">Login</button> </span>
                    
                    </div>
                    <Link className="anchor" to="/register">or Register</Link>
                </div>
            </form>
        </div>
    );
}
export default Login;
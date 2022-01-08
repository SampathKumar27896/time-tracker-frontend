import React, {useState} from 'react';
import './Register.css';
import { Link, useNavigate  } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { getUserInfo, registerUser} from '../features/user/userSlice';
import InfoBar from './InfoBar';
const Register = () => {
    const dispatch = useDispatch();
    const navigateTo = useNavigate ();
    const user = useSelector(state => state.user);
    let formInput = {
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    };
    const [formState, setFromState] = useState(formInput);
    const handleInputChange = (e) => {
        setFromState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    const handleFormSubmit = async(e) => {
        e.preventDefault();
        dispatch(registerUser(formState));
    }
    const redirect = () => {
        setTimeout(() => {
            navigateTo('/login')
        }, 3000)
    }
    return (
        <div>   
                {(user.status === 'success') && redirect()}
                <form onSubmit={handleFormSubmit}>
                    <div className="registrationForm">
                        <InfoBar state={user.status} message={user.message}/>
                        <label className="heading-one form-heading">Sign up</label>
                        <input type="text" name="userName" id="userName" className="" placeholder="Username" onChange={handleInputChange}></input>
                        <input type="text" name="email" id="email" className="" placeholder="Email" onChange={handleInputChange}></input>
                        <input type="password" name="password" id="password" className="" placeholder="Password" onChange={handleInputChange}></input>
                        <input type="password" name="confirmPassword" id="confirmPassword" className="" placeholder="Re-type Password" onChange={handleInputChange}></input>
                        <div className="registrationFormBtns">
                            <span><button className="secondary-btn cancel-btn">Cancel</button></span>
                            <span><button className="primary-btn register-btn">Sign up</button> </span>
                        </div>
                        <Link className="anchor" to="/login">or Login</Link>
                    </div>
                </form>
            
        </div>
    );
}
export default Register;
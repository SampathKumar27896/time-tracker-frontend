import React, {useState, useEffect} from 'react';
import './Register.css';
import { Link, useNavigate  } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { getUserInfo, registerUser, resetStatus} from '../features/user/userSlice';
import InfoBar from './InfoBar';
const Register = () => {
    const dispatch = useDispatch();
    const navigateTo = useNavigate ();
    const user = useSelector(state => state.user);
    const getEmptyObject = () => {
        return {
            userName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }
    useEffect(() => {
        dispatch(resetStatus())
    },[])
    let formInput = getEmptyObject();
    const [formState, setFormState] = useState(formInput);
    const handleInputChange = (e) => {
        setFormState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    const handleFormSubmit = async(e) => {
        e.preventDefault();
       dispatch(registerUser(formState));
    }
    const onClickCanel = (e) => {
        const emptyObject = getEmptyObject();
        setFormState(emptyObject);
    }
    const redirect = () => {
        setTimeout(() => {
            navigateTo('/login')
        }, 2000)
    }
    return (
        <div>   
                {(user.status === 'success') && redirect()}
                <form onSubmit={handleFormSubmit}>
                    <div className="registrationForm">
                        <InfoBar state={user.status} message={user.message}/>
                        <label className="heading-one form-heading">Sign up</label>
                        <input type="text" name="userName" id="userName" className="" placeholder="Username" onChange={handleInputChange} value={formState.userName}></input>
                        <input type="text" name="email" id="email" className="" placeholder="Email" onChange={handleInputChange} value={formState.email}></input>
                        <input type="password" name="password" id="password" className="" placeholder="Password" onChange={handleInputChange} value={formState.password}></input>
                        <input type="password" name="confirmPassword" id="confirmPassword" className="" placeholder="Re-type Password" onChange={handleInputChange} value={formState.confirmPassword}></input>
                        <div className="registrationFormBtns">
                            <span><input type="button"  onClick={(e) => onClickCanel(e)} className="secondary-btn cancel-btn" value="Cancel"/></span>
                            <span><input type="submit" className="primary-btn register-btn" value="Sign up"/> </span>
                        </div>
                        <Link className="anchor" to="/login">or Login</Link>
                    </div>
                </form>
            
        </div>
    );
}
export default Register;
import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { loginUser, resetStatus, saveUser} from '../features/user/userSlice';
import InfoBar from './InfoBar';
const Login = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const getEmptyObject = () => {
        return {
            email: "",
            password: "",
        }
    }
    useEffect(() => {
        console.log(props)
        dispatch(resetStatus())
        if(props.user && props.user.isAuthenticated)
            redirect();
    },[])
    useEffect(() => {
        if(user.status === 'success' && user.isAuthenticated) {
            const result = saveUser(user);
            if(result.status) {
                redirect();
            }
        }
    },[user])
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
        dispatch(loginUser(formState));
    }
    const redirect = () => {
        setTimeout(() => {
            window.location = "/task";
        }, 1000)
    }
    const resetState = () => {
        const emptyObject = getEmptyObject();
        setFormState(emptyObject);
    }
    const onClickCanel = (e) => {
        resetState();
    }
    return (
        <div>
            {(user.status === 'success' && user.isAuthenticated) && redirect()}
            <form onSubmit={handleFormSubmit}>
                <div className="loginForm">
                    <InfoBar state={user.status} message={user.message}/>
                    <label className="heading-one form-heading">Login</label>
                    <input type="text" name="email" id="email" className="" placeholder="Email" onChange={handleInputChange} value={formState.email}></input>
                    <input type="password" name="password" id="password" className="" placeholder="Password" onChange={handleInputChange} value={formState.password}></input>
                    <div className="loginFormBtns">
                        <span><input type="button"  onClick={(e) => onClickCanel(e)} className="secondary-btn cancel-btn" value="Cancel"/></span>
                        <span><input type="submit" className="primary-btn login-btn" value="Login"/> </span>
                    </div>
                    <Link className="anchor" to="/register">or Register</Link>
                </div>
            </form>
        </div>
    );
}
export default Login;
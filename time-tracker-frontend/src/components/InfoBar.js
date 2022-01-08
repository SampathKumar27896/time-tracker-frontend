import React from 'react';
import './InfoBar.css';
import { IconContext } from "react-icons";
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import Loader from './Loader';
const InfoBar = (props) => {
    let infoBarClass, iconClass;
    if(props.state === "success"){
        infoBarClass = "info-bar-success";
        iconClass = {className: "status-icon success-icon"}
    }
    else {    
        infoBarClass = "info-bar-error";
        iconClass = {className: "status-icon error-icon"}
    }

    const getIcon = (status) => {
        return (status === "success")? <FiCheckCircle /> : <FiAlertCircle />;
    }
    const getInfoBar = (result) => {
        if(result.state === "loading")
            return <Loader/>
        else if( result.message)
            return (
                <div className={"info-bar "+infoBarClass}>
                    <IconContext.Provider value={iconClass}>
                        {getIcon(props.state)}
                    </IconContext.Provider>
                    {props.message}
                </div>
            )
        else 
            return "";
    }
    return (
        <div>
            {getInfoBar(props)}
        </div>
    );
}
export default InfoBar;
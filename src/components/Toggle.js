import React from 'react';
import './Toggle.css';
const Toggle = (props) => {
    const handleOnChange = (e) => {
        props.handleCheckbox(e);
    }
    return (
        <div>
            <label className="switch">
                <input type="checkbox" 
                    checked={(props.isActive)? 'checked': ''} 
                    name="isActive" 
                    onChange = {(e) => {handleOnChange(e)}}
                />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Toggle;
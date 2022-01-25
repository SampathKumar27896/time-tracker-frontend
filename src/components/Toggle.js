import React from 'react';
import './Toggle.css';
const Toggle = (props) => {
    return (
        <div>
            <label className="switch">
                <input type="checkbox" defaultChecked={true} name="isActive" onClick={(e) => {props.handleCheckbox(e)}}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Toggle;
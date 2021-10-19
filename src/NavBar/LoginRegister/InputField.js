import React from 'react';
import './InputField.css';

const InputField = React.forwardRef((props,ref) => {
    return (
        <div>
            <label id='label'>{props.label}</label>
            <input
                id={props.label}
                className='modal-input'
                type={props.type}
                placeholder={props.label}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                ref = {ref}
                minLength = '6'
            ></input>
        </div>
    )
});

export default InputField;
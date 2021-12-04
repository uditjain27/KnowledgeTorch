import React from 'react';
import classes from './InputField.module.css';

const InputField = React.forwardRef((props,ref) => {
    return (
        <div>
            <label className={classes.label}>{props.label}</label>
            <input
                id={props.label}
                className={classes.modal_input}
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
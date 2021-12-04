import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendUploadData } from '../../store/uploadDetails-ApiCalling';
import classes from './Form.module.css';

function Form(props) {

    const titleRef = useRef();
    const descriptionRef = useRef();
    const subjectRef = useRef();
    const mediaRef = useRef();

    const dispatch = useDispatch();
    const token = useSelector((state) => state.loginStore.token);

    const fieldsOfForm = [{
        id: 'a',
        title: 'Title of Document : ',
        type: 'text',
        ref: titleRef
    }, {
        id: 'b',
        title: 'Description : ',
        type: 'text',
        ref: descriptionRef
    }, {
        id: 'c',
        title: 'Subject : ',
        type: 'text',
        ref: subjectRef
    },
    {
        id: 'd',
        title: '',
        type: 'file',
        ref: mediaRef
    }];

    const fileSubmitHandler = (e) => {
        e.preventDefault();
        const media = document.getElementById('c').files[0];
        dispatch(sendUploadData({
            name: titleRef.current.value,
            description: descriptionRef.current.value,
            mediaType: media.type,
            file: media,
            subject: subjectRef,
            type: 'notes',
            token: token
        }));
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.design}></div>
            <form className={classes.form} onSubmit={fileSubmitHandler}>
                {fieldsOfForm.map((field) =>
                    <div key={field.title} className={classes.div}>
                        <label id='label' className={classes.label}>{field.title}</label>
                        <input id={field.id} className={classes.modal_input} type={field.type} placeholder={field.title.split(':')[0]} ref={field.ref}></input>
                    </div>
                )}
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <filter id="gooey">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                            <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
                        </filter>
                    </defs>
                </svg>
                <button className={classes.gooey_button} type='submit'>
                    Submit
                    <span className={classes.bubbles}>
                        <span className={classes.bubble}></span>
                        <span className={classes.bubble}></span>
                        <span className={classes.bubble}></span>
                        <span className={classes.bubble}></span>
                        <span className={classes.bubble}></span>
                        <span className={classes.bubble}></span>
                        <span className={classes.bubble}></span>
                        <span className={classes.bubble}></span>
                        <span className={classes.bubble}></span>
                        <span className={classes.bubble}></span>
                    </span>
                </button>
            </form>
        </div>
    )
}

export default Form;




<button id="">
    F*** Awesome

</button>
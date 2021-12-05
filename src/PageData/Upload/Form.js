import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendUploadData } from '../../store/uploadDetails-ApiCalling';
import classes from './Form.module.css';
import img from '../../Signin/img/MicrosoftTeams-image.png'

import Button from '@mui/material/Button';

function Form(props) {

    const titleRef = useRef();
    const descriptionRef = useRef();
    const subjectRef = useRef();
    const mediaRef = useRef();
    const formRef = useRef();

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
        ref: mediaRef,
    }];


    const fileSubmitHandler = (e) => {
        e.preventDefault();
        const media = document.getElementById('d').files[0];
        console.log({
            name: titleRef.current.value,
            description: descriptionRef.current.value,
            mediaType: media.type,
            file: media,
            subject: subjectRef.current.value,
            type: "notes",
            token: token
        });
        dispatch(sendUploadData({
            name: titleRef.current.value,
            description: descriptionRef.current.value,
            mediaType: media.type,
            file: media,
            subject: subjectRef.current.value,
            type: "notes",
            token: token
        }));
        formRef.current.reset();
    }

    const resetForm = (e) => {
        e.preventDefault();
        formRef.current.reset();
    }

    return (
        <div className={classes.wrapper}>
            <form className={classes.form} onSubmit={fileSubmitHandler} ref={formRef}>
                {fieldsOfForm.map((field) =>
                    <div key={field.title} className={classes.div}>
                        <label id='label' className={classes.label}>{field.title}</label>
                        <input id={field.id} className={`${classes.modal_input} ${field.class ? field.class : ""}`} type={field.type}
                            placeholder={field.title.split(':')[0]} ref={field.ref} required autoComplete='off'></input>
                    </div>
                )}
                {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="gooey">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/>
                        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                                       result="highContrastGraphic"/>
                        <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop"/>
                    </filter>
                </defs>
            </svg> */}
                <div className={classes.butt}>
                    <Button type='submit' color='secondary' variant="contained" className={classes.margina} size='large'>
                        Submit&nbsp;&nbsp; <i className="fa fa-thin fa-upload"></i>
                    </Button>
                    <div style={{marginLeft:"120px", display: 'inline-block'}}>
                        <Button type='button' color="info" variant="contained" className={classes.margina} size='large' onClick={resetForm}>Reset&nbsp;&nbsp;
                            <i class="fas fa-undo-alt"></i>
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form;


<button id="">
    F*** Awesome

</button>
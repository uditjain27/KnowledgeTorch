import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendUploadData } from '../../store/uploadDetails-ApiCalling';
import classes from './Form.module.css';
import { CFormInput } from '@coreui/react';

import '../DashBoard/scss/style.scss';
import img from '../../Signin/img/MicrosoftTeams-image.png'

import Button from '@mui/material/Button';
import { URL } from '../../store/helper';

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
    }
    ];

    /* const sendGlobalTopicContri = async (data) => {
        try {
            const response = await fetch(`${URL}/topics/${props.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + data.token
                },
                body: JSON.stringify(
                    {
                        description: data.description,
                        mediaType: data.mediaType,
                        name: data.name,
                        subject: data.subject,
                        type: data.type,
                        globalId: data.globalId
                    }
                )
            });

            if(!response.ok){
                throw new Error('Contri not made');
            }
            resetForm();
        }catch(error){
            alert(error);
        }
    } */


    const fileSubmitHandler = (e) => {
        e.preventDefault();
        const media = document.getElementById('formFile').files[0];
        const data = {
            name: titleRef.current.value,
            description: descriptionRef.current.value,
            mediaType: media.type,
            file: media,
            subject: subjectRef.current.value,
            type: "Notes",
            token: token,
            url: props.id ? `/topics/${props.id}` : '/notes',
            id: props.id,
        };
        console.log(data);
        dispatch(sendUploadData(data));
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
                <div className={classes.div}>
                    <label id='label' className={classes.label}>Subject : </label>
                    {
                        props.id ? <input id='c' className={`${classes.modal_input} ${classes.disabled}`} type='text'
                            placeholder='Subject' ref={subjectRef} required autoComplete='off' disabled defaultValue={props.subject}></input>
                            : <input id='c' className={`${classes.modal_input}`} type='text'
                                placeholder='Subject' ref={subjectRef} required autoComplete='off'></input>
                    }
                </div>
                <div className="use_coreui_css">
                    <div className='mb-6 xl-3 lg-5'>
                        <CFormInput type="file" id="formFile" ref={mediaRef} required autoComplete='off' />
                    </div>
                </div>
                <div className={classes.butt}>
                    <Button type='submit' color='secondary' variant="contained" className={classes.margina} size='large'>
                        Submit&nbsp;&nbsp; <i className="fa fa-thin fa-upload"></i>
                    </Button>
                    <div style={{ marginLeft: "120px", display: 'inline-block' }}>
                        <Button type='button' color="info" variant="contained" className={classes.margina} size='large' onClick={resetForm}>Reset&nbsp;&nbsp;
                            <i className="fas fa-undo-alt"></i>
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
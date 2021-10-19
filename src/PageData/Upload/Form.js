import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { sendUploadData } from '../../store/uploadDetails-ApiCalling';
import './Form.css';

function Form(props) {

    const titleRef = useRef();
    const descriptionRef = useRef();
    const mediaRef = useRef();

    const dispatch = useDispatch();

    const fieldsOfForm = [{
        id:'a',
        title: 'Title of Document',
        type: 'text',
        ref: titleRef
    }, {
        id: 'b',
        title: 'Description',
        type: 'text',
        ref: descriptionRef
    }, {
        id: 'c',
        title: '',
        type: 'file',
        ref: mediaRef
    }];

    const fileSubmitHandler = (e) =>{
        e.preventDefault();
        console.log(typeof titleRef.current.value);
        console.log(typeof descriptionRef.current.value);
        const media = document.getElementById('c').files[0];
        console.log(typeof media.type);
        dispatch(sendUploadData({
            name :titleRef.current.value,
            description: descriptionRef.current.value,
            mediaType: media.type,
            file : media
        }));
    }

    return (
        <form className='form' onSubmit={fileSubmitHandler}>
            {fieldsOfForm.map((field) =>
                <div key={field.title}>
                    <label id='label'>{field.title}</label>
                    <input id={field.id} className='modal-input' type={field.type} placeholder={field.title} ref={field.ref}></input>
                </div>
            )}
            <button className='btn_submit' type='submit'>Submit</button>
        </form>
    )
}

export default Form;
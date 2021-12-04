import { Fragment, useRef, useState } from 'react';
import classes from './ContactUs.css';

function ContactUs(props) {
    const [input1, setFocusInput1] = useState(false);
    const [input2, setFocusInput2] = useState(false);
    const [input3, setFocusInput3] = useState(false);
    const [input4, setFocusInput4] = useState(false);

    const input1Ref = useRef();
    const input2Ref = useRef();
    const input3Ref = useRef();
    const input4Ref = useRef();

    function focusFunc1() {
        setFocusInput1(true);
    }

    function blurFunc1() {
        if (input1Ref.current.value === "") {
            setFocusInput1(false);
        }
    }
    function focusFunc2() {
        setFocusInput2(true);
    }

    function blurFunc2() {
        if (input1Ref.current.value === "") {
            setFocusInput2(false);
        }
    }
    function focusFunc3() {
        setFocusInput3(true);
    }

    function blurFunc3() {
        if (input1Ref.current.value === "") {
            setFocusInput3(false);
        }
    }
    function focusFunc4() {
        setFocusInput4(true);
    }

    function blurFunc4() {
        if (input1Ref.current.value === "") {
            setFocusInput4(false);
        }
    }

    return (
        <Fragment>
            <div className="container">
                <span className="big_circle"></span>
                <img src="https://raw.githubusercontent.com/sefyudem/Contact-Form-HTML-CSS/master/img/shape.png" className="square" alt="" />
                <div className="form">
                    <div className="contact_info">
                        <h3 className="title">Let's get in touch</h3>
                        <p className="text">
                            This website is created as minor project by the students of Dr. Akhilesh Das Gupta Institute of Technology & Management.<br />
                            Team members are:<br />
                            Udit Jain<br />
                            Shivam Garg<br />
                            Anshul Gupta
                        </p>

                        <div className="info">
                            <div className="information">
                                <img src="https://raw.githubusercontent.com/sefyudem/Contact-Form-HTML-CSS/master/img/location.png" className="icon" alt="" />
                                <p>Dr. Akhilesh Das Gupta Institute of Technology & Management</p>

                            </div>
                            <div className="information">
                                <img src="https://raw.githubusercontent.com/sefyudem/Contact-Form-HTML-CSS/master/img/email.png" className="icon" alt="" />
                                <p>uditjain270699@gmail.com</p>
                            </div>
                            <div className="information">
                                <img src="https://raw.githubusercontent.com/sefyudem/Contact-Form-HTML-CSS/master/img/phone.png" className="icon" alt="" />
                                <p>+91-1234567890</p>
                            </div>
                        </div>

                        <div className="social_media">
                            <p>Connect with us :</p>
                            <div className="social_icons">
                                <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact_form">
                        <span className="circle one"></span>
                        <span className="circle two"></span>

                        <form action="index.html" autocomplete="off" className="form_form">
                            <h3 className="title">Contact us</h3>
                            <div className={`input_container ${input1 ? 'focus' : ''}`}>
                                <input
                                    type="text"
                                    name="name"
                                    className='input'
                                    ref={input1Ref}
                                    onFocus={focusFunc1}
                                    onBlur={blurFunc1}
                                />
                                <label for="">Username</label>
                                <span>Username</span>
                            </div>
                            <div className={`input_container ${input2 ? 'focus' : ''}`}>
                                <input type="email" name="email" className="input" ref={input2Ref}
                                    onFocus={focusFunc2}
                                    onBlur={blurFunc2} />
                                <label for="">Email</label>
                                <span>Email</span>
                            </div>
                            <div className={`input_container ${input3 ? 'focus' : ''}`}>
                                <input type="tel" name="phone" className="input" ref={input3Ref}
                                    onFocus={focusFunc3}
                                    onBlur={blurFunc3} />
                                <label for="">Phone</label>
                                <span>Phone</span>
                            </div>
                            <div className={`input_container textarea ${input4 ? 'focus' : ''}`}>
                                <textarea name="message" className="input" ref={input4Ref}
                                    onFocus={focusFunc4}
                                    onBlur={blurFunc4}></textarea>
                                <label for="">Message</label>
                                <span>Message</span>
                            </div>
                            <input type="submit" value="Send" className="btn" />
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ContactUs;
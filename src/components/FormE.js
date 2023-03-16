import React, { useState, useRef, useEffect } from "react";
// import Modal from './Modal'
// import FocusTrap from 'focus-trap-react'

const FormC = () => {

    const dialogRef = useRef(null);


    useEffect(() => {
        document.title = 'Form E';
    }, []);

    const initialValues = {
        firstName: "",
        email: "",
        lib: "",
        city: ""
    }
    const [values, setValues] = useState(initialValues);
    // const [show, setShow] = useState(false);
    // const [formValue, setShowFormValue] = useState(false)

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit called: ", values);
    }

    const handleEnter = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    }

    const onClickYes = () => {
        console.log("Clicked on Yes: ", values);
        // dialogRef.current.close();
        // unmountTrap();
    }

    const onClose = () => {
        console.log("Closed");
        // dialogRef.current.close();
        // unmountTrap();

    }

    const trapFocus = (element) => {
        var focusableEls = dialogRef.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
        var firstFocusableEl = focusableEls[0];
        var lastFocusableEl = focusableEls[focusableEls.length - 1];
        var KEYCODE_TAB = 9;

        dialogRef.addEventListener('keydown', function (e) {
            var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

            if (!isTabPressed) {
                return;
            }

            if (e.shiftKey) /* shift + tab */ {
                if (document.activeElement === firstFocusableEl) {
                    lastFocusableEl.focus();
                    e.preventDefault();
                }
            } else /* tab */ {
                if (document.activeElement === lastFocusableEl) {
                    firstFocusableEl.focus();
                    e.preventDefault();
                }
            }
        });
    }

    const trapFocus1 = () => {
        console.log("dialogRef - ", dialogRef.current);
    }
    return (
        <div>
            <h1>Hi there, It's Form E!</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input aria-label="First Name" name="firstName" type="text" onChange={handleChange} autoComplete="off" onKeyDown={handleEnter} />
                </label>

                <br />

                Email: <input aria-label="Email" name="email" type="text" autoComplete="off" onChange={handleChange} onKeyDown={handleEnter} />
                <br />

                <label >
                    Preferred Framework:
                    <select name="lib" value={values.lib} onChange={handleChange} onKeyDown={handleEnter}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                        <option value="Others">Others</option>
                    </select>
                </label>
                <br />

                <p id="cityLabel">Your city:</p>
                <span aria-labelledby="cityLabel" onChange={handleChange} onKeyDown={handleEnter}>
                    <input aria-label="Hyderabad" name="city" type="radio" value="Hyderabad" />Hyderabad
                    <input aria-label="Bangalore" name="city" type="radio" value="Bangalore" />Bangalore
                    <input aria-label="Delhi" name="city" type="radio" value="Delhi" />Delhi
                </span>

                <br />
                <button type="submit">Submit</button>
                <button type="reset" aria-describedby="reset">Reset form</button>
                <p id="reset" hidden>Click on this button to reset this form.</p>
                <br />
                <hr />

            </form>
            <br />

            {/* <!-- A modal dialog containing a form --> */}
            {/* <FocusTrap></FocusTrap> */}
            {/* <dialog id="favDialog" aria-labelledby="favDialog__label"
                aria-describedby="favDialog__description" ref={dialogRef}>

                <h2 id="favDialog__label">Are you sure you want to submit?</h2>
                <p id="favDialog__description" hidden>
                    Click Yes for submitting your details, Click No to go back, Click cancel to close this dialog box.
                </p>

                <button onClick={onClickYes}>Yes</button>
                <button onClick={onClose}>No</button>
                <button onClick={onClose}>Cancel</button>

            </dialog> */}


            <div>

                <br />
                <p>
                    <button onClick={() => trapFocus()} aria-describedby="defaults-heading">
                        activate trap
                    </button>
                </p>

            </div>
            <div className="trap" ref={dialogRef}>
                <button onClick={onClose}>Cancel</button>
                <h2 id="dialogLabel">Are you sure you want to submit?</h2>
                <p id="dialogDescription" hidden>
                    Click Yes for submitting your details, Click No to go back, Click cancel to close this dialog box.
                </p>

                <button onClick={onClickYes}>Yes</button>
                <button onClick={onClose}>No</button>


            </div>

        </div>



    );
}

export default FormC;
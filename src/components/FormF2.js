import React, { useState, useRef, useEffect } from "react";
import FocusTrap from 'focus-trap-react'

const FormF2 = () => {

    const dialogRef = useRef(null);

    const initialValues = {
        firstName: "",
        email: "",
        lib: "",
        city: ""
    }
    const [values, setValues] = useState(initialValues);
    // const [result, setResult] = useState(false);

    // const handleChange = (event) => {
    //     setValues({
    //         ...values,
    //         [event.target.name]: event.target.value
    //     });
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log("Submit called: ", typeof (values));
    //     mountTrap();
    // }

    // const handleEnter = (event) => {
    //     if (event.key === "Enter") {
    //         event.preventDefault();
    //     }
    // }

    // const onClickYes = () => {
    //     console.log("Clicked on Yes: ", values);
    //     // setResult(true);
    //     unmountTrap();
    // }

    // const onClose = () => {
    //     console.log("Closed");
    //     unmountTrap();

    // }

    //trap focus

    // const [activeTrap, setTrap] = useState(false);

    // const mountTrap = () => {
    //     console.log("mountTrap called, value = ", activeTrap);
    //     setTrap(true);
    // }

    // const unmountTrap = () => {
    //     console.log("unmountTrap called, value = ", activeTrap);
    //     setTrap(false);
    // }

    // function handleEscape(e) {
    //     if (e.key === "Escape") {
    //         console.log("Escape pressed in FocusTrap");
    //         setTrap(false);
    //     }
    // }

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit called: ", values);
        dialogRef.current.showModal();
        // setShow(true);
    }

    const handleEnter = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    }
    const onClickYes = () => {
        console.log("Clicked on Yes: ", values);
        dialogRef.current.close();
    }

    const onClose = () => {
        console.log("Closed");
        dialogRef.current.close();

    }
    useEffect(() => {
        document.title = 'Form F';
    }, []);

    return (
        <div>
            <div>

                <h1>Hi there, I am Form F2!</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fullname">Name: </label>
                    <input id="fullname" name="fullname" type="text" onChange={handleChange} onKeyDown={handleEnter} autoComplete="off" />

                    <br />

                    <label htmlFor="email">Email: </label>
                    <input aria-required="true" id="email" aria-label="Email" name="email" type="text" autoComplete="off" onChange={handleChange} onKeyDown={handleEnter} />
                    <br />



                    <label htmlFor="lib"> Preferred Framework:  </label>
                    <select name="lib" id="lib" value={values.lib} onChange={handleChange} onKeyDown={handleEnter}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                        <option value="Others">Others</option>
                    </select>

                    <br />

                    <span id="cityLabel">Your city:</span>
                    <span aria-labelledby="cityLabel" onChange={handleChange} onKeyDown={handleEnter}>
                        <input aria-label="Hyderabad" name="city" type="radio" value="Hyderabad" />Hyderabad
                        <input aria-label="Bangalore" name="city" type="radio" value="Bangalore" />Bangalore
                        <input aria-label="Delhi" name="city" type="radio" value="Delhi" />Delhi
                    </span>

                    <br />
                    <button type="submit">Submit</button>
                    <button type="reset" aria-describedby="reset all fields">Reset</button>
                    <p id="reset" hidden>Click on this button to reset this form.</p>
                    <br />
                    <hr />

                </form>
                <br />
                {/* 
                <div>
                    <p>trap value = {activeTrap.toString()}</p>
                    <br />
                </div> */}
                {/* aria-label="Are you sure you want to submit? Press Yes to confirm, Press No to return to form" */}

                <dialog id="favDialog" aria-labelledby="favDialog__label"
                    aria-describedby="favDialog__description" ref={dialogRef}>
                    <div role={document}>

                        <h2 id="ll">Are you sure you want to submit?</h2>
                        <span id="favDialog__description" hidden> Good good Are you sure you want to submit? Click Yes for submitting your details</span>
                        <button onClick={onClose}>Cancel</button>
                        <p id="favDialog__label" hidden>
                            wanna submit the form?
                        </p>

                        <button onClick={onClickYes}>Yes</button>
                        <button onClick={onClose}>No</button>
                    </div>
                </dialog>
                {/* <div className="popup" aria-labelledby="dialogLabel"
                    aria-describedby="dialogDescription" >
                    {activeTrap && (
                        <FocusTrap
                        >
                            <div onKeyDown={handleEscape}>
                                <button onClick={onClose}>Cancel</button>
                                <h2 id="dialogLabel">Are you sure you want to submit?</h2>
                                <p id="dialogDescription" hidden>
                                    Click Yes for submitting your details, Click No to go back, Click cancel to close this dialog box.
                                </p>

                                <button onClick={onClickYes}>Yes</button>
                                <button onClick={onClose}>No</button>
                            </div>
                        </FocusTrap>
                    )}
                </div> */}
            </div>
            {/* {result && JSON.stringify(values)} */}
        </div >
    );
}

export default FormF2;
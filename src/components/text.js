import React, { useState, useEffect } from "react";
import FocusTrap from 'focus-trap-react'
// import FormE from './components/FormE';
// import FormS from './components/FormS';
// import FormC from './components/FormC';
// import FormF2 from './components/FormF2';
// import FormF from './components/FormF';
// import DemoOne from './components/FormD';
// import FormA from './components/FormA'
// import FormB from './components/FormB'
// import FlavorForm from "./components/test1";

const FormA = () => {

    const initialValues = {
        fullname: "",
        email: "",
        lib: "",
        city: ""
    }
    const [values, setValues] = useState(initialValues);
    const [popUp, setPopUp] = useState(false);
    // const [formSubmit, setFormSubmit] = useState(false)

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log("Submit called: ", typeof (values));
        mountTrap();
        setPopUp(!popUp)
    }

    const handleEnter = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    }

    const onClickYes = () => {
        // console.log("Clicked on Yes: ", values);
        console.log(values);
        unmountTrap();
        setPopUp(false);
        // setFormSubmit(true);
    }

    const onClose = () => {
        // console.log("Closed");
        unmountTrap();
        setPopUp(false);
    }

    //trap focus

    const [activeTrap, setTrap] = useState(false);

    const mountTrap = () => {
        // console.log("mountTrap called, value = ", activeTrap);
        setTrap(true);
    }

    const unmountTrap = () => {
        // console.log("unmountTrap called, value = ", activeTrap);
        setTrap(false);
    }

    function handleEscape(e) {
        if (e.key === "Escape") {
            // console.log("Escape pressed in FocusTrap");
            setTrap(false);
            setPopUp(false);
        }
    }

    useEffect(() => {
        document.title = 'Form A';
    }, []);

    return (
        <div role="main">


            <h1>Hi there, I am an Accessible Form!</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="fullname">Name: </label>
                <input id="fullname" name="fullname" type="text" onChange={handleChange} onKeyDown={handleEnter} autoComplete="off" />

                <br />

                <label htmlFor="email">Email: </label>
                <input aria-required="true" id="email" name="email" type="text" onChange={handleChange} onKeyDown={handleEnter} autoComplete="off" />
                <br />

                {/* <label> Preferred Framework:  </label> */}
                {/*  aria-label="Please choose your Preferred framework" */}

                <label htmlFor="lib"> Preferred Framework:  </label>
                <select name="lib" id="lib" value={values.lib} onChange={handleChange} onKeyDown={handleEnter}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>
                    <option value="Others">Others</option>
                </select>

                <br />

                {/* <span id="cityLabel" aria-label="Please select your city">Your city:</span> */}

                {/* Your city:
                <span aria-label="Your city" onChange={handleChange} onKeyDown={handleEnter}>
                    <input aria-label="Hyderabad" name="city" type="radio" value="Hyderabad" />Hyderabad
                    <input aria-label="Bangalore" name="city" type="radio" value="Bangalore" />Bangalore
                    <input aria-label="Delhi" name="city" type="radio" value="Delhi" />Delhi
                </span> */}



                <br />

                <fieldset>
                    <legend>Your city:</legend>
                    <span onChange={handleChange} onKeyDown={handleEnter}>
                        <input aria-label="Bangalore" name="city" type="radio" value="Bangalore" />Bangalore
                        <input aria-label="Hyderabad" name="city" type="radio" value="Hyderabad" />Hyderabad
                        <input aria-label="Delhi" name="city" type="radio" value="Delhi" />Delhi
                    </span>
                </fieldset >


                <br />
                <button type="submit">Submit</button>
                <button type="reset" aria-labelledby="reset">Reset</button>
                <p id="reset" hidden>reset the form</p>
                <br />

            </form>
            <br />
            {/* 
                <div>
                    <p>trap value = {activeTrap.toString()}</p>
                    <br />
                </div> */}

            <div role="dialog" aria-label="Are you sure you want to submit? Click Yes to confirm, No to go back to the form"
                onKeyDown={handleEscape} className={popUp ? "popup" : ""}>
                {/* className={popUp ? "form-popup" : ""} */}
                {activeTrap && (
                    <FocusTrap
                    >
                        <div className="popup-content">
                            <button aria-label="Close this dialog" onClick={onClose} className="cancel-button">Cancel</button>
                            <h2 >Are you sure you want to submit?</h2>
                            <button onClick={onClickYes}>Yes</button>
                            <button onClick={onClose}>No</button>
                        </div>
                    </FocusTrap>
                )}
            </div>

            {/* {formSubmit && <div aria-live="polite">
                Form has been submitted.
            </div>} */}

        </div>

    );
}

export default FormA;
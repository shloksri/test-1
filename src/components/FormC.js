import React, { useState, useEffect } from "react";
import FocusTrap from 'focus-trap-react'

const FormC = () => {



    const initialValues = {
        firstName: "",
        email: "",
        lib: "",
        city: ""
    }
    const [values, setValues] = useState(initialValues);

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
        unmountTrap();
    }

    const onClose = () => {
        console.log("Closed");
        // dialogRef.current.close();
        unmountTrap();

    }

    //trap focus

    const [activeTrap, setTrap] = useState(false);

    function mountTrap() {
        console.log("mountTrap called, value = ", activeTrap);
        setTrap(true);
    }

    function unmountTrap() {
        console.log("unmountTrap called, value = ", activeTrap);
        setTrap(false);
    }

    function handleEscape(e) {
        if (e.key === "Escape") {
            console.log("Escape pressed in FocusTrap");
            setTrap(false);
        }
    }

    useEffect(() => {
        document.title = 'Form C';
    }, []);

    return (
        <div>
            <h1>Hi there, It's Form C!</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input aria-label="First Name" name="firstName" type="text" onChange={handleChange} autoComplete="off" onKeyDown={handleEnter} />
                </label>

                <br />

                Email: <input aria-required="true" aria-label="Email" name="email" type="text" autoComplete="off" onChange={handleChange} onKeyDown={handleEnter} />
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
            <div>
                <p>trap value = {activeTrap.toString()}</p>
                <br />
                <p>
                    <button onClick={mountTrap} aria-describedby="defaults-heading">
                        activate trap
                    </button>
                </p>
            </div>
            <div>
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
            </div>
        </div>



    );
}

export default FormC;
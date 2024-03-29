import React, { useState, useEffect } from "react";
import FocusTrap from 'focus-trap-react'

const FormF = () => {

    const initialValues = {
        firstName: "",
        email: "",
        lib: "",
        city: ""
    }
    const [values, setValues] = useState(initialValues);
    // const [result, setResult] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit called: ", typeof (values));
        mountTrap();
    }

    const handleEnter = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    }

    const onClickYes = () => {
        console.log("Clicked on Yes: ", values);
        // setResult(true);
        unmountTrap();
    }

    const onClose = () => {
        console.log("Closed");
        unmountTrap();

    }

    //trap focus

    const [activeTrap, setTrap] = useState(false);

    const mountTrap = () => {
        console.log("mountTrap called, value = ", activeTrap);
        setTrap(true);
    }

    const unmountTrap = () => {
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
        document.title = 'Form F';
    }, []);

    return (
        <div>
            <div>

                <h1>Hi there, I am an Accessible Form!</h1>

                <p id="cb" hidden>check aria labelled by</p>
                <span aria-describedby="cb" role="button" tabIndex={0}>Check</span>

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

                <div>
                    <p>trap value = {activeTrap.toString()}</p>
                    <br />
                </div>

                <div role="dialog" aria-label="bro Are you sure you want to submit?" className="popup"
                    aria-describedby="dialogDescription" onKeyDown={handleEscape}>
                    {activeTrap && (
                        <FocusTrap
                        >
                            <div >
                                <button onClick={onClose}>Cancel</button>
                                <h2 >Are you sure you want to submit?</h2>
                                {/* <p id="dialogDescription">
                                    Click Yes for submitting your details, Click No to go back, Click cancel to close this dialog box.
                                </p> */}

                                <button onClick={onClickYes}>Yes</button>
                                <button onClick={onClose}>No</button>
                            </div>
                        </FocusTrap>
                    )}
                </div>
            </div>
            {/* {result && JSON.stringify(values)} */}
        </div >
    );
}

export default FormF;
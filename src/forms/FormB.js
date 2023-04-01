import React, { useState, useEffect } from "react";
// import FocusTrap from 'focus-trap-react'

const FormB = () => {

    const initialValues = {
        fullname: "",
        email: "",
        lib: "",
        city: ""
    }
    const [values, setValues] = useState(initialValues);
    const [popUp, setPopUp] = useState(false)

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        mountTrap();
        setPopUp(!popUp)
    }

    const handleEnter = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    }

    const onClickYes = () => {
        console.log("Form values: ", values);
        unmountTrap();
        setPopUp(false);
    }

    const onClose = () => {
        unmountTrap();
        setPopUp(false);
    }

    //trap focus

    const [activeTrap, setTrap] = useState(false);

    const mountTrap = () => {
        setTrap(true);
    }

    const unmountTrap = () => {
        setTrap(false);
    }

    useEffect(() => {
        document.title = 'Form B';
    }, []);

    return (
        <div>

            <h1>Not an Accessible Form!</h1>

            <form onSubmit={handleSubmit}>
                Name:
                <input id="fullname" name="fullname" type="text" onChange={handleChange} onKeyDown={handleEnter} autoComplete="off" />
                <br />

                Email:
                <input id="email" name="email" type="text" onChange={handleChange} onKeyDown={handleEnter} autoComplete="off" />
                <br />

                Preferred Framework:
                <select name="lib" id="lib" value={values.lib} onChange={handleChange} onKeyDown={handleEnter}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>
                    <option value="Others">Others</option>
                </select>

                <br />

                {/* <span id="cityLabel" aria-label="Please select your city">Your city:</span> */}
                Your city:
                <span onChange={handleChange} onKeyDown={handleEnter}>
                    <input aria-label="Hyderabad" name="city" type="radio" value="Hyderabad" />Hyderabad
                    <input aria-label="Bangalore" name="city" type="radio" value="Bangalore" />Bangalore
                    <input aria-label="Delhi" name="city" type="radio" value="Delhi" />Delhi
                </span>

                <br />
                <button type="submit">Submit</button>
                <button type="reset" aria-labelledby="reset all fields">Reset</button>
                <br />

            </form>
            <br />

            <div className={popUp ? "popup" : ""}>
                {activeTrap && 
                <div className="popup-content">
                    <button onClick={onClose} className="cancel-button">Cancel</button>
                    <h2 >Are you sure you want to submit?</h2>
                    <button onClick={onClickYes}>Yes</button>
                    <button onClick={onClose}>No</button>
                </div>}
            </div>
            <br />
            {/* <button>Last</button> */}
        </div>

    );
}

export default FormB;
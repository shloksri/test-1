import React, { useState } from "react";
import Modal from './Modal'

const FormB = () => {

    const initialValues = {
        firstName: "",
        email: "",
        lib: "",
        city: ""
    }
    const [values, setValues] = useState(initialValues);
    const [show, setShow] = useState(false);
    // const [formValue, setShowFormValue] = useState(false)

    const handleChange = (event) => {
        // const [name, value] = event.target;
        // console.log("event.target.name = " + event.target.name + ", event.target.value = " + event.target.value);
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit called: ", values);
        setShow(true);
    }

    const handleEnter = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    }
    const onClickYes = () => {
        setShow(false);
        // setShowFormValues
        console.log("Clicked on Yes: ", values);
        // setValues(initialValues);
        // console.log("Clicked after: ", values);
    }
    const onClose = () => {
        setShow(false);
    }

    return (
        <div>
            <h2>Hi there, It's Form B!</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input aria-label="First Name" name="firstName" type="text" onChange={handleChange} autoComplete="off" onKeyDown={handleEnter} />
                </label>

                <br />

                Email: <input label="Email" name="email" type="text" autoComplete="off" onChange={handleChange} onKeyDown={handleEnter} />
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
                {/* <label><input type="radio" name="city" value="Hyderabad" onChange={handleChange} /> Hyderabad</label><br />
          <label><input type="radio" name="city" value="Bangalore" onChange={handleChange} /> Bangalore</label><br />
          <label><input type="radio" name="city" value="Delhi" onChange={handleChange} /> Delhi</label> */}

                <br />
                <button type="submit">Submit</button>
                <button type="reset" aria-label="reset the values in form">Reset form</button>
            </form>
            <br />

            {/* <button onClick={() => setShow(!show)}>Show modal</button> */}

            {/* <!-- A modal dialog containing a form --> */}
            <dialog id="favDialog">
                <form method="dialog">
                    <p>
                        <label htmlFor="">
                            Are you sure you want to submit?
                            <button onClick={onClickYes}>Yes</button>
                            <button onClick={onClose}>No</button>
                            <button onClick={onClose}>Cancel</button>
                        </label>

                    </p>

                </form>

            </dialog>
            <p>
                <button id="showDialog" onClick={() => { document.getElementById('favDialog').showModal() }}>Show the dialog</button>
            </p>

            <Modal aria-labelledby="Are you sure you want to submit?" show={show} onClose={onClose} onClickYes={onClickYes}></Modal>

        </div>
    );
}

export default FormB;
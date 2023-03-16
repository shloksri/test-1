import React, { useState, useRef, useEffect } from "react";
// import Modal from './Modal'

const FormB = () => {

  const dialogRef = useRef(null);

  useEffect(() => {
    document.title = 'Form B';
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
  }

  const onClose = () => {
    console.log("Closed");
  }

  return (
    <div>
      <h1>Hi there, It's Form B!</h1>
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
        <button type="reset" aria-label="reset the values in form">Reset form</button>
      </form>
      <br />

      {/* <button onClick={() => setShow(!show)}>Show modal</button> */}

      {/* <!-- A modal dialog containing a form --> */}
      <dialog id="favDialog" aria-labelledby="favDialog__label"
        aria-describedby="favDialog__description" ref={dialogRef}>
        <div role={document}>
          <form method="dialog">


            <h2 id="favDialog__label">Are you sure you want to submit?</h2>


            <p id="favDialog__description" hidden>
              Click Yes for sumbmitting your details, Click No to go back, Click cancel to close this dialog box.
            </p>

            <button onClick={onClickYes}>Yes</button>
            <button onClick={onClose}>No</button>
            <button onClick={onClose}>Cancel</button>

          </form>
        </div>
      </dialog>
    </div>
  );
}

export default FormB;
import React, { useState, useRef, useEffect } from "react";
// import Modal from './Modal'
// import FocusTrap from 'focus-trap-react'
import dialogPolyfill from 'dialog-polyfill'

const FormA = () => {

  const dialogRef = useRef(null);


  useEffect(() => {
    document.title = 'Form A';
    // var dialog = document.getElementById('favDialog');
    // const dialog = document.querySelector('dialog');
    // console.log("not using, ", dialog);
    // dialogPolyfill.registerDialog(dialog);
    // if (window.dialogPolyfill) {
    //   console.log("is polyfill working? ");
    //   dialogPolyfill.registerDialog(dialog);
    //   console.log("line executed");
    // } else {
    //   console.log("not using, ", dialog);
    // }
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
    // if (dialogRef.current.open) {
    //   console.log("dialog open");
    //   dialogRef.current.focus();
    // }
    const dialog = document.querySelector('dialog');
    console.log("dialog value, ", dialogRef.current);
    dialogPolyfill.registerDialog(dialogRef.current);
    // if (window.dialogPolyfill) {
    //   console.log("is polyfill working? ");
    //   dialogPolyfill.registerDialog(dialogRef.current);
    //   console.log("line executed");
    // }

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
  // const handleKeyDown = (e) => {
  //   if (e.key === "Tab") {
  //     console.log("Tab pressed");
  //     // if (dialogRef.open) {
  //     //   console.log("dialog open");
  //     // }
  //   }
  //   else {
  //     console.log(e.key + " pressed");
  //   }
  // }

  return (
    <div>
      <h1>Hi there, It's Form A!</h1>
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
      </form>
      <br />

      {/* <!-- A modal dialog containing a form --> */}
      {/* <FocusTrap></FocusTrap> */}
      <dialog id="favDialog" aria-labelledby="favDialog__label"
        aria-describedby="favDialog__description" ref={dialogRef}>
        <form method="dialog">
          <h2 id="favDialog__label">Are you sure you want to submit?</h2>
          <p id="favDialog__description" hidden>
            Click Yes for submitting your details, Click No to go back, Click cancel to close this dialog box.
          </p>
          <button onClick={onClickYes}>Yes</button>
          <button onClick={onClose}>No</button>
          <button onClick={onClose}>Cancel</button>
        </form>


      </dialog>
    </div>
  );
}

export default FormA;
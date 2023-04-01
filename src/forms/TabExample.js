import React, { useEffect } from "react";
import './styles.css'

const TabExample = () => {

    useEffect(() => {
        document.title = 'Tab Index example';
    }, []);

    const handleClick = (event) => {
        console.log("Clicked on - ", event.target.id);
    }

    function handleKeydown(event) {
        if (event.key === "Enter") {
            console.log("Clicked on - ", event.target.id);
        }
    }

    return (
        <div className="tab-example">
            <button id="first" className="button" onClick={handleClick}> Click me !</button>
            <br />
            <br />
            <div  id="second" className="button" onClick={handleClick} onKeyDown={handleKeydown} tabIndex={0}> Click me ! </div>
            <br /><br />
            {/* <button id="ignore-me" className="button" onClick={handleClick}>Ignore me</button> */}
        </div >
    );
}

export default TabExample;


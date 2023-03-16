import React, { useEffect } from "react";
import './styles.css'

const TabExample = () => {

    useEffect(() => {
        document.title = 'Tab Index example';
    }, []);

    const handleClick = (event) => {

        console.log("Clicked on - ", event.target.id);
        // console.log("Clicked");
    }

    return (
        <div className="tab-example">
            <button id="First" className="button" onClick={handleClick}> Click me !</button>
            <br />
            <br />
            <div role="button" id="Second" className="button" onClick={handleClick}> Click me ! </div>
            <br /><br />
            <button id="Ignore me" className="button" onClick={handleClick}>Ignore me</button>
        </div >
    );
}

export default TabExample;


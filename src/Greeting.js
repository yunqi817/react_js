import React, { useState } from "react";

function Greeting() {
    const [name, setName] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    }

    return (
        <React.Fragment>
            <label>
                Enter your name:&nbsp;
                <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={handleChange}
                />
            </label>
            <h1>Hello, {name.length > 0 ? name : "Stranger"}!</h1>
        </React.Fragment>
    );
}

export default Greeting;

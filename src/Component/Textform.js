import React, { useState } from 'react'

export default function Textform(props) {

    const handleUpClick = () => {
        // console.log("Up Button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
        <div>
            <h1>{props.headings}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="15"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
        </div>

        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read.</p>

            <h2>Preview</h2>
            <p>{text}</p>

        </div>

        </>
    )
}

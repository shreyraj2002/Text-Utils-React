import React, { useState } from 'react'

export default function Textform(props) {

    const handleUpClick = () => {
        // console.log("Up Button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleInverse = () => {
        let words = text.split(" ");
        let newText = words
            .map((word) => {
                let newWord = "";
                for (let i = 0; i < word.length; i++) {
                    let char = word.charAt(i);
                    if (char >= "A" && char <= "Z") {
                        char = char.toLowerCase();
                    } else if (char >= "a" && char <= "z") {
                        char = char.toUpperCase();
                    }
                    newWord += char;
                }

                return newWord;
            })
            .join(" ");
            
        setText(newText);
    }

    const handleSentenceCaseClick = () => {
        let lowerCase = text.toLowerCase();
        let regex = /([^.!?]+[!?.\d\s]+)/g;
        let sentences = lowerCase.match(regex);
        let newText = sentences
            .map((sentence) => {
                return (sentence.charAt(0) >= "a" && sentence.charAt(0) <= "z"
                    ? sentence.charAt(0).toUpperCase() + sentence.slice(1)
                    : sentence);
            })
            .join("");

        setText(newText);
    };

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
                <button className="btn btn-primary mx-2" onClick={handleInverse}>iNVERSE cASE</button>
                <button className="btn btn-primary mx-2" onClick={handleSentenceCaseClick}>Sentence Case</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

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

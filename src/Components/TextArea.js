import React, { useState } from 'react'

export const TextArea = (props) => {

    const [text, setText] = useState("Enter Text Here");

    const textUpperCase = () => {

        // console.log("Upper Case has been revoked");

        // Now for converting the text to upper case, we will use setText state.
        // setText("The text has been changed");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const textLowerCase = () => {

        let newText = text.toLowerCase();
        setText(newText);
    }

    

    const textOnChange = (event) => {
        // Displays the text change event
        // console.log("Text On Change has been revoked");

        setText(event.target.value);// This will listen to the event and set the target as value.

    }


    return (
        <>
            <div className={`mb-3 my-5 text-${props.theme ==='light' ? 'dark' : 'light'}`}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={textOnChange} id="textBox" rows="8"></textarea>
            </div>

            <button className="btn btn-primary mx-1" onClick={textUpperCase}>Upper Case</button>
            <button className="btn btn-primary mx-1" onClick={textLowerCase}>Lower Case</button>

            <div className={`container  my-3 text-${props.theme ==='light' ? 'dark' : 'light'}`} >
            {/* style={`${props.theme==='light'? {color:'black'}:{color:'white'}}`} */}
                <h1>Text Summary</h1>
                <p>Total Characters: {text.length} </p>
                <p>Total Words: {text.split(" ").length} </p>
            </div>
        </>
    )
}

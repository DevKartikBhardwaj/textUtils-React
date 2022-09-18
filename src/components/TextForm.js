//tut#08 Adding more features

import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");
    const uppercaseClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const locaseClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    
    const clearClick=()=>{
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event)=>{
       setText(event.target.value);
    }
    // setText("Text enter after updation");
    return (
        <>
        <div className='container'>
                <h1 style={props.text}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange}id="myBox" value={text} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={uppercaseClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={locaseClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={clearClick}>Clear</button>
        </div>
        
        <div className="container my-5">
<h3 style={props.text}>Your text summary</h3>
<p style={props.text}>{text.split(" ").length-1} words and {text.length} characters</p>
<p style={props.text}>{0.08*(text.split(" ").length-1)} Minutes to read</p>

<br />
<h2 style={props.text}>Preview</h2>
<p style={props.text}>{text}</p>
        </div>
        </>
    )
}



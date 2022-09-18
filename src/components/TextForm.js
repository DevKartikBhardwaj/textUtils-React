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

const handleCopy=()=>{
    navigator.clipboard.writeText(text);
}

    // setText("Text enter after updation");
    return (
        <>
        <div className='container'>
                <h1 style={props.text}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange}id="myBox" value={text} rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary my-1" onClick={uppercaseClick}>Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={locaseClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearClick}>Clear</button>
        </div>
        
        <div className="container my-5">
<h3 style={props.text}>Your text summary</h3>
<p style={props.text}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.split("").filter((element)=>{return element!==" "}).length} characters</p>
<p style={props.text}>{0.08*(text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes to read</p>

<br />
<h2 style={props.text}>Preview</h2>
<p style={props.text}>{text.length===0?"Nothing to preview":text}</p>
        </div>
        </>
    )
}



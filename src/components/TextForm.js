import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked:- "+text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLoClick = () =>{
        console.log("Lowercase was clicked:- "+text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowerercase!","success");
    }
    const handleClearClick = () =>{
        console.log("Clear Text was clicked:- "+text);
        let newText = "";
        setText(newText)
        props.showAlert("Text cleared!","success");
    }
    // const handleCopy = () => {
    //     var text = document.getElementById("myBox");
    //     text.select();
    //     navigator.clipboard.writeText(text.value);
    // }
    const handleRevClick = () =>{
        console.log("Reverse was clicked:- "+text);
        setText(text.split("").reverse().join(""))
        props.showAlert("Text reversed!","success");

    }
    const handleOnChange = (event) =>{
        //console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#505050':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="4"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick= {handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick= {handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick= {handleClearClick}>Clear Text</button>
            {/* <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button> */}
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick= {handleRevClick}>Reverse</button>

        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}

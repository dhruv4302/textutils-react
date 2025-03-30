import React,{useState} from 'react'



export default function Textform(props) {

    const handleUpClick = ()=>{
        //console.log("uppercase was clicked!" + text);
        let newText = text.toUpperCase();
        setText(newText);
       // console.log("you have clicked on handleUpclick")
       props.showAlert("converted to Uppercase!","Success");
    }

    const handleLoClick = ()=>{
        //console.log("Lowercase was clicked!" + text);
        let newText = text.toLowerCase();
        setText(newText);
        //console.log("you have clicked on handleUpclick")
        props.showAlert("converted to Lowercase!","Success");

    }
    const handleClearClick = ()=>{
      
        let newText ="";
        setText(newText);
        //console.log("you have clicked on handleUpclick")
        props.showAlert("text has been cleared!","Success");

    }

    const handleCopy =()=> {
        console.log("i am copy");
        var text = document.getElementById("mybox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard!","Success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[]+/);
        setText(newText.join(" "));
        props.showAlert("extra spaces removed!","Success");
    }
    const handleOnChange = (event) =>{
       // console.log("on change was clicked!");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here");
    // text = "hey dhruv"; wrong way to change 
    //setText("hey dhruv");
    return (
    <>
        <div class ="container" style ={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" style ={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange = {handleOnChange} rows="6"></textarea>
            </div>
           <button className='btn btn-primary mx-2' onClick={handleUpClick} >convert to uppercase</button>
           <button className='btn btn-primary mx-2' onClick={handleLoClick} >convert to lowercase</button>
           <button className='btn btn-primary mx-2' onClick={handleClearClick} >clear content</button>
           <button className='btn btn-primary mx-2' onClick={handleCopy} >copy to clipboard</button>
           <button className='btn btn-primary mx-2' onClick={handleExtraSpaces} >remove ExtraSpace</button>


        </div>
        <div className = "container my-3" style ={{color:props.mode==='dark'?'white':'black'}}>
            <h1>your text summary</h1>
            <p>{text.split(" ").length-1} words and {text.length}words</p>
            <p>{0.008*text.split(" ").length} minutes take to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview"}</p>
        </div>
    </>
    )
}

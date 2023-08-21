import React,{useState} from "react";


function InputArea(props){
    const [_isMouseOver, _setIsMouseOver] = useState(false);
    const [inputText, setInputText] = useState("");

function handleMouseOver(){
    _setIsMouseOver(true);
  }
  
  function handleMouseOut(){
    _setIsMouseOver(false);
  }
  function handleOnChange(event){
    setInputText(event.target.value);
  }
    return(
        <div className="form">
        <input type="text" onChange={handleOnChange} name="list" value={inputText}/>
        <button onClick={() => {
            props.onAdd(inputText);
            setInputText("");
        }} 
        onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
          <span className={_isMouseOver ? "isHover" : "" }>Add</span>
        </button>
      </div>
    )
}

export default InputArea;
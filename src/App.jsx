import React,{useState} from "react";


//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

function App() {
const [inputText, setInputText] = useState("");
const [items, setItems] = useState([]);
const [_isMouseOver, _setIsMouseOver] = useState(false);


function addItem(){
  setItems(prevItems => {
    return [...prevItems, inputText]
  });
  setInputText("");
}

function handleMouseOver(){
  _setIsMouseOver(true);
}

function handleMouseOut(){
  _setIsMouseOver(false);
}

function handleOnChange(event){
  setInputText(event.target.value);
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleOnChange} name="list" value={inputText}/>
        <button onClick={addItem} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
          <span className={_isMouseOver ? "isHover" : "" }>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;

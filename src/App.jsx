import React,{useState} from "react";
import ToDoItem from "./components/ToDoItem";
import InputArea from "./components/InputArea";
//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

function App() {
const [items, setItems] = useState([]);

function addItem(inputText){
  setItems(prevItems => {
    return [...prevItems, inputText]
  });
}

function deleteItem(id) {
 // console.log(id)
 setItems(prevItems => {
  return prevItems.filter(
    (item, index) => { return index !== id}
  )
 })
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((item, index) => <ToDoItem onChecked={deleteItem} key={index} id={index} text={item}/>)}
        </ul>
      </div>
    </div>
  );
}

export default App;

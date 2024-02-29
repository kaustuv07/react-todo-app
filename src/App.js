import React,{useState} from "react";

const App = () => {
  const [todos,setTodos] = useState([]);
  const [userInput,setUserInput] = useState("");
  const addTodos =() =>{
    setTodos([...todos,userInput]);
    setUserInput("");
  }
  return (
    <div>
      <h1>Todo List</h1>
      <input value={userInput} onChange={(event)=>{setUserInput(event.target.value)}} type="text"></input>
      <button onClick={()=>addTodos()}>Add</button>
      <ul>
        {
          todos.map((todo,index)=><li key={index}>{todo}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
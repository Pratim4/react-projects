// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {
  let [toStatus, setToStatus]= useState([]);
  let saveToDoList=(event)=>{
    event.preventDefault();
    let toname= event.target.toname.value;
    if(!toStatus.includes(toname)){
      let finalDolist=[...toStatus,toname]
      setToStatus(finalDolist);

    }
    else {
      alert("Already exist.");
    }
  }
  let list= toStatus.map((value, index)=>{
    
    return(
      <ToDoListItem value={value} key={index} indexNumber={index} toStatus={toStatus} setToStatus={setToStatus}/>
      // toStatus can be anything just named variable
    )
  });
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toname" /> <button>Save</button>
      </form>
      <div className='outerDiv'>
        <ul>
          {list}
        </ul>

      </div>
    </div>
  );
}

export default App;

// preventDefault will call the event but donot halt what we done previviously.

function ToDoListItem({value, indexNumber, toStatus, setToStatus}){
  let [status, setStatus]=useState(false);
  let deleteRow=()=>{
    // filter from the toStatus
    let finalData= toStatus.filter((v,i)=>i!==indexNumber)
    setToStatus(finalData)
    
  }
  let checkStatus=()=>{
    setStatus(!status)
  }
  
  return(

    <li className={(status) ? 'completetodo' : ''} onClick={checkStatus}> {indexNumber+1}. {value} <span onClick={deleteRow}>&times;</span></li>
  )
}

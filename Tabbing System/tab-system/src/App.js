// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { tab } from './tabbs';



function App() {
  let [activeTab, setActiveTab]=useState(0);
  let [activeContent, setActiveContent] = useState(tab[0]);

  let changeData=(index)=>{
    setActiveTab(index)
    setActiveContent(tab[index])
  }
  return (
    <div className="App">
      <div className="tabsOuter">

      <h1 style={{textAlign:'left'}}>Law Prep Vision, Mission and Values</h1>
      <ul>
        { tab.map((tabsItems,index)=>{
          return(
            <li>
              <button onClick={()=>changeData(index)}className={activeTab===index ? 'activeButton' : ''}>{tabsItems.title}</button>
            </li>
          )
        }) }
        
       
      </ul>
      {activeContent!== undefined ?
        <p>{activeContent.description}</p>
        :
        ''
      }
      </div>
      
    </div>
  );
}

export default App;

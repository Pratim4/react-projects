// import logo from './logo.svg';
import { useState } from 'react';
import {ToastContainer, toast} from 'react-toastify'
import './App.css';
import { LC, NC, SC, UC } from './data/PassChar';


function App() {
  let [uppercase,setUppercase]=useState(false)
  let [lowercase,setLowercase]=useState(false)
  let [number,setNumber]=useState(false)
  let [symbol,setSymbol]=useState(false)
  let [passwordlen,setPasswordlen]=useState(10)
  let [pass,setPass]=useState('')
let createPassword=()=>{
  let charSet='';
  let finalPass='';
  if(uppercase || lowercase || number || symbol){
    if(uppercase) charSet+=UC;
    if(lowercase) charSet+=LC;
    if(number) charSet+=NC;
    if(symbol) charSet+=SC;
    for(let i=0;i<passwordlen;i++){
      finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
    }
    setPass(finalPass);
  }
  else{
    toast.error('Please select at least one checkbox...');
  }
}
let copyPass=()=>{
  navigator.clipboard.writeText(pass)
  toast.success('Copied..')
}
  
  return (
    
    <>
    
      <div className="passwordBox">
        <h2>Password Generator</h2>
      
      <div className='pwinput'>
        <input type="text" value={pass} readOnly/>
        <button onClick={copyPass}>Copy</button>
      </div>
      <div className="passlength">
        <label >Password length</label>
        <input type="number" max={20} min={0} value={passwordlen} onChange={(event)=>{setPasswordlen(event.target.value)}} />
      </div>
      <div className="checkbox">
        <label>Include uppercase letters</label>
        <input type="checkbox" checked={uppercase} onChange={()=>{setUppercase(!uppercase)}}/>
      </div>
      <div className="checkbox">
        <label>Include lowercase letters</label>
        <input type="checkbox" checked={lowercase} onChange={()=>{setLowercase(!lowercase)}}/>
      </div>
      <div className="checkbox">
        <label>Include numbers</label>
        <input type="checkbox" checked={number} onChange={()=>{setNumber(!number)}}/>
      </div>
      <div className="checkbox">
        <label>Include symbols</label>
        <input type="checkbox" checked={symbol} onChange={()=>{setSymbol(!symbol)}}/>
      </div>
      <div className='btn' >
        <button onClick={createPassword}>Generate Password</button>
      </div>
      </div>
      <ToastContainer/>
    </>
    
  );
}

export default App;

import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../common/Header';
import { data } from '../Data/datablog';

export default function BlogDetails() {
    let uselocation=useLocation();
    let currentId= uselocation.pathname.split('/')[2]
    let currentData = data.filter((v)=>v.id==currentId)[0];
    console.log(currentData)
  return (
    <div>
        <Header/>
        <h1>{currentData.title}</h1>
        <p>{currentData.body}</p>
    
    </div>
  )
}

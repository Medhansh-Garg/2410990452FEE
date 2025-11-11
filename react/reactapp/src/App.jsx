import { useState } from 'react'

import './App.css'

import { First } from './first.jsx'
import { Second } from './second.jsx'
import { Third } from './third.jsx';

function App() {
  const[count,setCounter]=useState(0);


  const a=10;
  function updatevalue(){
    setCounter(count+1);
    
  }
  console.log(count);
   
  return (
    <>
       

      {/* <h1>hi{5+5}</h1>
       
      <Header name="john" rollno="24"/>
      <Header name="jake" rollno="13"/>
      <Header name="jill" rollno="45"/>
      <Header name="kim" rollno="10"/> */}
      
{/*       
      <First></First>
      <Second ></Second> */}
      
    <Third></Third>
     
    </>
  )
}

export default App

import { useState } from "react"
export const First=() =>{
    const [count,setCounter]=useState(0);
    function updatevalue(){
        setCounter(count+1);
    }
    return(
        <>
        <p>counter:{count}</p>
        <button onClick={updatevalue}>Click me</button>
        
        </>
    )
}
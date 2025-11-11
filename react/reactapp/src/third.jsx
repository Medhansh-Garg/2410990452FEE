import { useEffect, useState } from "react"

export const Third=()=>{
        const[count,setcount]=useState(10);
        const[data,setdata]=useState(80);
        useEffect(()=>{console.log("component rendered")},[count]);
        function updatevalue(){
            setcount(count+1);
            console.log(count);
        }


        function updatedata(){
            setdata(data-1);
            console.log(data);
        }

        return(<>
  <p>count:{count}</p>
        <button onClick={updatevalue}>click me</button>
        <p>data:{data}</p>
        <button onClick={updatedata}>click me</button>
            </>

        )
      

}
export const Second=() =>{
    const count=0;
    function updatevalue(){
        count++;
    }
    return(
        <>
        <p>2nd counter:{count}</p>
        <button onClick={updatevalue}>Click me</button>
        
        </>
    )
}
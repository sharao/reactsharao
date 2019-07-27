import React,{useState} from 'react'

function Hookcomp() {
    const inisialCount = 0;
    const [count, setCount] = useState(inisialCount)
    const increaseFive= ()=>{
        for(let i=0; i<5; i++){
            setCount(prevState=>prevState+1);
        }
    }
    return (
        <div>
            Count: {count}
            <button onClick={()=>setCount(inisialCount)}>Reset</button>
            <button  onClick={()=> setCount((prevState)=>prevState+1)}>Increse 1</button>
            <button  onClick={()=> setCount((prevState)=>prevState-1)}>Decrese 1</button>
            <button  onClick={increaseFive}>Increase 5</button>
        </div>
    )
}

export default Hookcomp

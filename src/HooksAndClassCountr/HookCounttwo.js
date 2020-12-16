import React,{useState} from 'react'

function HookCounttwo()  {
    const initial = 0;
    const[count,setCount] = useState(initial);
    const incrementFive = () =>{
        for(let i=0;i<5;i++){
            setCount(prevCount => prevCount+1);
        }
    }
    return (
        <div>
        Count:{count}
            <button onClick={() => setCount(prevCount => prevCount+1)}>Increment</button>
            <button onClick={() => setCount(initial)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount-1)}>Decrease</button>
            <button onClick={incrementFive}>Increment5</button>
        </div>
    )
}

export default HookCounttwo

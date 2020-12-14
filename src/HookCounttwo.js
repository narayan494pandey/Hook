import React,{useState} from 'react'

function HookCounttwo()  {
    const initial = 0;
    const[count,setCount] = useState(initial)
    return (
        <div>
        Count:{count}
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(initial)}>Reset</button>
            <button onClick={() => setCount(count-1)}>Decrease</button>
        </div>
    )
}

export default HookCounttwo

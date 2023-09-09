import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)

    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleReduce = () =>{
        const reduceNew = count -1;
        setCount(reduceNew);
    }
    
    return (
        
        <div style={{border: '2px solid yellow'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}
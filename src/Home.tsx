import React from 'react'
import { useState,useEffect,useRef} from 'react'

const Home=()=>{
    const [name,setName] = useState("");
    const inputRef = useRef<any>(1);

    useEffect(()=>{
        inputRef.current = inputRef.current+1;
    });     

    return(
        <React.Fragment>
            <h4>I am a Home Page</h4>
            <label>User Name : </label>
            <input type="text" ref={inputRef} name="User Name" onChange={(event:any)=>setName(event.target.value)} value={name}/>
            <p>The Entered name is {name} </p>
            <p>The Number of times the page rendered is {inputRef.current}</p>
        </React.Fragment>
    )
}
export default Home
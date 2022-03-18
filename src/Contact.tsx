import React from 'react'
import { useState,useEffect,useRef} from 'react'

const Contact=()=>{
    const [name,setName] = useState("");
    const inputRef = useRef<any>(1);
    useEffect(()=>{
        inputRef.current = inputRef.current+1;
    });    
    return(
        <>
            <h4 style={{color:"Blue"}}>I am the Contact page</h4>
            <input type="text" name="User Name" value={name} onChange={(event:any)=>setName(event.target.value)} />
            <p>The Number of times the page rendered is {inputRef.current}</p>  
        </>
    )
}
export default Contact
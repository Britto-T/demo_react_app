import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const Home=()=>{
    const [name,setName] = useState("");
    return(
        <React.Fragment>
            <h4>I am a Home Page</h4>
            <label>User Name : </label>
            <input type="text" name="User Name" onChange={(event:any)=>setName(event.target.value)} value={name}/>
            <p>The Entered name is {name} </p>
        </React.Fragment>
    )
}
export default Home
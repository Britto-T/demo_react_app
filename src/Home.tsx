import React from 'react'
import { useState,useEffect,useRef} from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import About from './About'
import Student from './Student'
import Contact from './Contact'

const Home=()=>{
    const [name,setName] = useState("");
    const inputRef = useRef<any>(1);
    const refFocus =useRef<any>();

    useEffect(()=>{
        refFocus.current.focus();
    },[]);  
    
    useEffect(()=>{
        inputRef.current = inputRef.current+1;
    });  
       
    return(
        <React.Fragment>
            <h4>I am a Home Page</h4>
            <label>User Name : </label>
            <input type="text" name="User Name" value={name} onChange={(event:any)=>setName(event.target.value)} />
            <label>College Name : </label>
            <input type="text" name="College Name" ref={refFocus}/> {/* Focus is set to college Name text Box */}
            <p>The Entered name is {name} </p>
            <p>The Number of times the page rendered is {inputRef.current}</p>  
            <div>
            <BrowserRouter>
            <h3>Routing Part</h3>         
            <div>
                <ul>
                    <li>
                        <Link to={"Student"}>Student</Link>
                    </li>
                    <li>
                        <Link to={"Contact"}>Contact</Link>
                    </li>
                    <li>
                        <Link to={"About"}>About</Link>
                    </li>
                </ul>
            </div>
            <Routes>
               <Route path={"Student"} element={<Student/>} />
               <Route path={"Contact"} element={<Contact/>} />
               <Route path={"About"} element={<About/>} />
            </Routes>
            </BrowserRouter>
            </div> 
        </React.Fragment>
    )
}
export default Home
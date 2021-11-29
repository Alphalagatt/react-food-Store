import { useRef, useState } from "react";
import './login.css';

export function Login(){

    const emailInput = useRef();
    const passInput = useRef();

    const [isOn,setIsOn] = useState(false);

    function showOverLay(){
        setIsOn(true);
    }

    

    return<div className='main'>
        <div className='card'>
        <div><h2>Sign In Form</h2></div>
        <div><input id='email' type='email' ref={emailInput} placeholder='Email Address'/></div>
        <div><input type='password' id='password' ref={passInput} placeholder='Password' /></div>
        <div><button>Sign in</button></div>

        <p>Dont have an account? Sign up<a href='#' onClick={showOverLay}>here..</a></p>

        </div>

        { isOn?<Overlay/>: ""}
        
    </div>
}

export function Overlay(){
    return(
        <div className = 'overlay'>
            this is my Overlay
        </div>
    )
}

export function SignUp(){

    const emailInput = useRef();
    const passInput = useRef();
    const fullNameInput = useRef();
    const userNameInput = useRef();

    return (
        <div className='main'>
            <div className = 'card'>
            <h2>Sign Up Form</h2>
        
        <input id='email' type='email' ref={emailInput}/>
        <input id='fullname' type='text' ref={fullNameInput}/>
        <input id='username' type='text' ref={userNameInput}/>
        <input type='password' id='password' ref={passInput}/>
        <button>Sign in</button>
        </div>
        </div>
    )
}
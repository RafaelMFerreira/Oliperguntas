import React, {useState} from 'react';
import Header from "../components/header/header";
import { useNavigate } from "react-router-dom";

import "./login.css";

function LoginLogo(){
    return (
        <div style={{position: 'fixed', top:'0px'}}>
            <img id='login-logo' src={'logo2.png'}/>
            <h1 id='login-title'>Olimperguntas</h1>
        </div>
    )
}

function LoginButtons() {
    const navigate = useNavigate();
    return (
        <div style={{position: 'fixed', bottom:'0px', marginBottom: '150px', width:'100%'}}>
            <button className='login-button' onClick={() => navigate('/images')}>Login</button>
            <button className='login-button' onClick={() => navigate('/images')}>Convidado</button>
        </div>
    )
}


function Login() {
   
    return (
        <>
            <div>
                <LoginLogo/>
                <LoginButtons/>
            </div>
        </>
    );
  }
  
  export default Login;
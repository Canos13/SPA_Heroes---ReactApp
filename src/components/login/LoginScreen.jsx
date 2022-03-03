import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {

  const navigate = useNavigate();
  
  const handleLogin = ()=>{
    navigate( "/", { replace:true });
  }

  return (
    <div>
      <div className='h1 text-center my-5'>
        LoginScreen
      </div>
      <button 
        className='btn btn-success d-block mx-auto'
        onClick={handleLogin}
      >
        login
      </button>
    </div>
  )
}
    
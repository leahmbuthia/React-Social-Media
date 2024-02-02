import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import { useForm } from 'react-hook-form';

const Login = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  

  const SubmitFunction = (data) => {
    console.log(data); // Output user input to console for debugging

    // Retrieve user details from local storage for comparison
    const storedUserDetails = JSON.parse(localStorage.getItem('userData'));
    if (
      storedUserDetails &&
      storedUserDetails.username === data.username &&
      storedUserDetails.password === data.password
    ) {
      console.log('Login successful'); // Output login success message to console for debugging
      navigate('/main'); // Redirect to main page upon successful login
    } else {
      console.log('Invalid username or password'); // Output login failure message to console for debugging
    }
  };

  return (
    
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum, alias totam numquam ipsa exercitationem
            dignissimos, error nam, consequatur.
          </p>
          <span>Don't you have an account?</span>
          
          <button onClick={() => navigate("/register")}>Register</button>

          
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handleSubmit(SubmitFunction)}>
            <input type="text" placeholder="Username" {...register('username')} />
            <input type="password" placeholder="Password" {...register('password')} />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from 'react'
import { NavLink } from 'react-router-dom';
import './Login.scss'

const Login = () => {

// const { login } = useContext(AuthContext);

const handleLogin = () => {
  login();
};

return (
  <div className="login">
    <div className="card">
      <div className="left">
        <h1>Hello World.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
          alias totam numquam ipsa exercitationem dignissimos, error nam,
          consequatur.
        </p>
        <span>Don't you have an account?</span>
        <NavLink to="/Register">
        <button>Register</button>
        </NavLink>
      </div>
      <div className="right">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  </div>
);

}
export default Login
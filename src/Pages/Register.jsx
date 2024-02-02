
import "./register.scss";
import { useForm } from 'react-hook-form'; 
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  
  const schema = yup.object().shape({
    username: yup.string().required("Username is required").max(10, "Username cannot be more than 10 characters"),
    email: yup.string().required("Email is required").email("Invalid email format"),
    password: yup.string().required("Password is required").min(4, "Password must be at least 4 characters"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    // Save data to local storage
    localStorage.setItem('userData', JSON.stringify(data));
    // Add logic for handling registration, e.g., sending a request to a server
    console.log(data);
    navigate("/login");
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Username" {...register("username")} />
            {errors.username && <p>{errors.username.message}</p>}
            <input type="email" placeholder="Email" {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
            <input type="password" placeholder="Password" {...register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
            <input type="password" placeholder="Confirm Password" {...register("confirmPassword")} />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

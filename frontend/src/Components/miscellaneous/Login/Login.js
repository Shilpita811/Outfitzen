import React, { useEffect, useState } from 'react'
import './Login.css';
import { clearErrors, login } from '../../../Action/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import Loader from '../Loader/Loader';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const { error, loading, isAuthenticated } = useSelector((state) => state.user);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  }

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
      console.log(error);
    }
    if (isAuthenticated) {
      alert.success("Login Successfully");
      navigate("/");
    }
  }, [dispatch, error, alert, isAuthenticated, navigate]);
  return (

    <div>
      {loading ? <Loader /> :
        <div className="form_cls">
          <div className="login_box">
            <h1>Login</h1>
            <p>Hey there! Enter your details to get sign in to your account.</p>
            <form onSubmit={loginSubmit}>
              <input type="email" placeholder="Email" className="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
              <input type="password" className="password" placeholder="Password" id="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
              <button className="sign_in">Sign In</button>
            </form>

            <p>Don't have an account? <a href="/register">Register here</a></p>
          </div>
        </div>
      }
    </div>

  )
}

export default Login
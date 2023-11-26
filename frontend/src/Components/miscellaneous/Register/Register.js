import React, { useEffect, useState } from 'react'
import './Register.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { clearErrors, register } from '../../../Action/userAction';
import Loader from '../Loader/Loader';

const Signin = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const { error, loading, isAuthenticated } = useSelector((state) => state.user);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  useEffect(()=> {
    if(error){
        alert.error(error);
        dispatch(clearErrors());
        console.log(error);
    }
    if(isAuthenticated){
      alert.success("Successfully Register");
        navigate("/");
    }
}, [dispatch, error, alert,isAuthenticated,navigate]);


  return (
    <div>
      {loading ? <Loader/> : <div className="form_cls">
      <div className="login_box">
        <h1>Register</h1>
        <p>Hey there! Enter your details to get sign in to your account.</p>
        <form onSubmit={registerSubmit} encType="multipart/form-data">
          <input type="text" placeholder="Name" className="name" name='name' value={user.name} required onChange={registerDataChange}/>
          <input type="email" placeholder="Email" className="email" name='email' value={user.email} required onChange={registerDataChange}/>
          <input type="password" className="password" placeholder="Password" name="password" value={user.password} required onChange={registerDataChange}/>
          <button className="sign_in">Register</button>
        </form>

        <p>Have an account? <a href="/login">Login</a></p>
      </div>
    </div>
      }
    </div>
  )
}

export default Signin
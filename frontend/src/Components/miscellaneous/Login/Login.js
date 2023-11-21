import React from 'react'
import './Login.css'

const Login = () => {
  return (

	<div class="form_cls">
  <div class="login_box">
    <h1>Login</h1>
    <p>Hey there! Enter your details to get sign in to your account.</p>
    <input type="email" placeholder="Email" class="email"/>
    <input type="password" class="password" placeholder="Password" id="password"/>
    <button class="sign_in">Sign In</button>
 
    <p>Don't have an account? <a href="/register">Register here</a></p>
  </div>
</div>
	
  )
}

export default Login
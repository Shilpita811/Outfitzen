import React from 'react'
import './Register.css'

const Signin = () => {
  return (
<div class="form_cls">
  <div class="login_box">
    <h1>Register</h1>
    <p>Hey there! Enter your details to get sign in to your account.</p>
    <input type="text" placeholder="Name" class="name"/>
    <input type="email" placeholder="Email" class="email"/>
    <input type="password" class="password" placeholder="Password" id="password"/>
    <button class="sign_in">Register</button>

    <p>Have an account? <a href="/login">Login</a></p>
  </div>
</div>
  )
}

export default Signin
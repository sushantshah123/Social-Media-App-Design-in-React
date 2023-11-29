import React from 'react'
import "./register.scss"

const Register = () => {
  return (
    <>
    <div className='register'>
      <h3>Register</h3>
        <form>
           <input type="text" placeholder='Username....'/>
           <input type="email" placeholder='Email....' />
           <input type="password" placeholder='Password....'/>
           <input type="text" placeholder='Name....' />
           <button>Login</button>
        </form>
    </div>
    </>
  )
}

export default Register
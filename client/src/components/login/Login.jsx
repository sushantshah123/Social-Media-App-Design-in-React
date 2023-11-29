import React from 'react'
import "./login.scss"

const Login = () => {
  return (
    <>
    <div className='login'>
      <h3>Login</h3>
        <form>
           <input type="text" placeholder='Username....'/>
           <input type="password" placeholder='Password....'/>
           <button>Login</button>
        </form>
    </div>
    </>
  )
}

export default Login
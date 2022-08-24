import { useState, useEffect } from 'react'
import styles from './../login/Login.module.css'
import { Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    if(user){
      setLoggedIn(true)
    }
  },[])

  const handleSubmit = (e) =>{
    e.preventDefault()
    localStorage.setItem('user',JSON.stringify(email,password))
    setLoggedIn(true)
    console.log(email,password)
  }
  return (
    loggedIn ?  <Navigate to="/dashboard" /> :
    <div>
      <Navbar/>
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input style={{width:'100%'}} type="email" name="email" value={email} placeholder='whykay@gmail.com' required onChange={(e) => setEmail(e.target.value)}/>
      </label>
      <label>
        <span>Password:</span>
        <input type='password' name="email" value={password}  placeholder='At least 6 characters' required onChange={(e) => setPassword(e.target.value)} style={{width:'100%'}} />
      </label>
      <button className='btn'>Login</button>
      <span className='mt-3' style={{color:'#7D7D7D'}}><span style={{color:'#000', fontWeight:'bold', display:'inline'}}>Note:</span> Your default password is your surname in lowercase</span>
    <div className="topping">
    <div className='input'>
    <input type="checkbox" id="topping" name="topping" value="Paneer"/><span>Remember Me</span>
    </div>
    <div className='fgt-pwd'>
      <a href='/' >Forgot Password?</a>
    </div>
    </div>
    </form>
    </div>
  )
}


export default Login
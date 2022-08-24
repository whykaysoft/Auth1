import React from 'react'
import Logo from './../image/uni.png'
import Img from './../image/unilag.png'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
     <Navbar/>
    <div className='main-container'>
      <div className='container mt-4' style={{maxWidth:'100%', height:'auto', background:'', objectFit:'contain'}}>
      <img src={Img} alt='unilag-senate' width='100%' height='100%'/>
        <div className='content'>
          <img className='mt-5' src={Logo} alt="Unilag" />
          <h1 className='mt-5'>Welcome to University of Lagos</h1>
          <p>University of Lagos is a leading institution dedicated to quality teaching,learning,research and community service. We have over the past years developed leaders in many disciplines through our various programmes. As the University of First Choice and the Nation's Pride, we place great premium on the development and welfare of our staffs and students both at the undergraduate and postgraduate levels. For more info, visit <a href="#">unilag.edu.org</a>.</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default Home
import React from 'react'
import { Link } from 'react-router-dom'
import Image from './../image/uni.png'
import './../App.css'
import Navbar from '../components/Navbar'


const Dashboard = () => {
  return (
    <>
      <Navbar/>
    <div className='dash-content'>
      <div style={{width:'150px', height:'150px', objectFit:'cover'}}>
        <img src={Image} alt="unilag-logo" width='100%' height='100%' />
      </div>
      <h1 className='fs-2 text-muted'>Welcome, to your dashboard!</h1>
    </div>
    <p className='text-center text-muted'>Hey! You have access to your Biodata, Results, Courses and many more on your dashboard</p>
    <p className='fs-1 text-center text-muted'>Check your mail, <b>{JSON.parse(localStorage.getItem('user'))}</b> to see your Results, Biodata and Courses</p>
    <p className='fs-2 text-center'><Link className='text-decoration-none text-primary fw-bold' to='/logout'>Log out</Link></p>
  </>
  )
}

export default Dashboard
import styles from './../components/Navbar.module.css'
import {Link} from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <nav className={styles.navbar}>
        <ul>
           <li className={styles.title}><Link to='/'>Student Portal</Link></li>
           <li><Link to='/'>Home</Link></li>
           {
            user?
            <>
                <li><Link to='/dashboard'>Dashboard</Link></li>
            </>:
            <>
                <li><Link to='/login'>Login</Link></li>
            </>
           }
        </ul>
    </nav>
  )
}

export default Navbar
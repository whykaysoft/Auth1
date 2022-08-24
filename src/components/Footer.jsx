import React from 'react'
import styles from './../components/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className='text-end' style={{color:'rgb(128,127,157)', padding:'10px', fontSize:'1.2em', borderTop: '2px solid #EAEAEA'}}><b>Powered by</b> University of Lagos, centre for Information Technology and Systems (whykaysoft)</p>  
    </div>
  )
}

export default Footer
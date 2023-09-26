import React from 'react'
import styles from "../Navbar/Navbar.module.css"
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}> <h2>LOGO</h2></div>

      <div className={styles.navList}>
        <ul className={styles.unorderelement}>
          <li>Qualifications</li>
          <li>Organizations</li>
          <li>Resrarch&Analysis</li>
          <li>Lorem</li>
          <li>Lorem</li>
        </ul>
      </div>

      <div className={styles.btnDiv} >
        <Button className={styles.navBtn} variant="outlined" >Enrolment</Button>
      </div>
    </div>
  )
}

export default Navbar


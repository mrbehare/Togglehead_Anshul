import React from 'react';
// import Subscribeimg from '../../assets/SubscribeImage.png';
import Styles from '../Subscribe/Subscribe.module.css';
import { Button, Input } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Subscribe = () => {
  



  return (
    <div className={Styles.subWrapper}>
      <div className={Styles.subInner}>
        <h2>Subscribe </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore placeat veniam, nam voluptatibus recusandae praesentiuevm. </p>
        <div className={Styles.emailContainer}>
          <Input className={Styles.input}
            type="email"
            placeholder="Enter your Email Address"
            
            
          />
          <Button variant="contained" className={Styles.inputBtn}>
            Subscribe  <PlayCircleIcon />
          </Button>
        </div>
      </div>

     
    </div>
  );
};

export default Subscribe;

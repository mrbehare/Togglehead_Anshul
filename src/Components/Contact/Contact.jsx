import React from "react";
import styles from "../Contact/Contact.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.logoWrapper}>
        <div className={styles.text}>
          <h2>Contact Us</h2>
          <p>
            Address: amet, consetetur sadipscing elitr, sed diam Email id:
            eirmod tempor invidunt ut labore et dolore Phone no:123456789
          </p>
        </div>

        <div className={styles.logo}>
          <h2>Follow Us</h2>
          <div>
            <FacebookIcon className={styles.icon} />
            <LinkedInIcon className={styles.icon} />
            <InstagramIcon className={styles.icon} />
            <TwitterIcon className={styles.icon} />
            <YouTubeIcon className={styles.icon} />
          </div>
        </div>

        <div className={styles.address}>
          <h2>Head Office</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut
          </p>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
          <p>Lorem ipsum asd assaweeg Lorem Ipsum.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

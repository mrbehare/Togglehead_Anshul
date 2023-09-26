import React from 'react'
import styles from "../Schedule/Schedule.module.css"
import event1 from "../../assets/event1.png"
import event2 from "../../assets/event2.png"
import event3 from "../../assets/event3.png"


const Schedule = () => {
  return (
    <div className={styles.schedule}>
      <div className={styles.events}>
        <h2>Upcoming Examinations</h2>
        <p>make sure to register for the events</p>
      </div>
      <div className={styles.line}></div>
       
       <div className={styles.eventDiv}>
       <div className={styles.time}><img src={event1} alt="" /></div>
      <div className={styles.time}><img src={event2} alt="" /></div>
      <div className={styles.time}><img src={event3} alt="" /></div>
       </div>
     
    </div>
  )
}

export default Schedule

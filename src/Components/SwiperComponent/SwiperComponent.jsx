import React from "react";
import  { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css"; // Import Swiper styles
import "swiper/css";
import SwiperCore from"swiper"
import styles from "../SwiperComponent/SwiperComponent.module.css"

// Install required Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const SwiperComponent = () => {
  const slides = [{head:"Lorem ipsum 1",bottom:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
  {head:"Lorem ipsum 2",bottom:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
  {head:"Lorem ipsum 3",bottom:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
  {head:"Lorem ipsum 4",bottom:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
  {head:"Lorem ipsum 5",bottom:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
  {head:"Lorem ipsum 6",bottom:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."}
]; 

  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (slides) => {
      setActiveStep(slides);
  };
  return (
    
<Swiper
  loop={true}
  index={activeStep}
  onChangeIndex={handleStepChange}
  spaceBetween={20}
  slidesPerView={3}
  autoplay
  infiniteLoop
  interval={1000}
  className={styles.swiperContainer}
  
>
  {slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <div className={styles.swiperCard}>
        {/* Add a container for the image */}
        <div className={styles.slideContent}>
          {/* Image */}
          <img  className={styles.swiperImg} src="https://img.freepik.com/premium-photo/natural-marble-pattern-background_1258-22160.jpg" alt="Slide " />

          {/* Text */}
          <div className={styles.textOverlay}>
            <h2 className={styles.head}>{slide.head}</h2>
            <p className={styles.bottom}>{slide.bottom} </p>
            <p  className={styles.bottom}href="#" style={{cursor:"pointer"}}>Know More </p>
          </div>
           
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>




    


  );
};

export default SwiperComponent;

import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import styles from "./HeroSection.module.css";
import Button from "@mui/material/Button";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
    {
        imgPath: "https://img.freepik.com/free-photo/manager-networking_1098-14539.jpg?w=996&t=st=1695644083~exp=1695644683~hmac=2d530b65e4ab3b6c8fd4f3f2ea225f7b1aa4b3a9b9d07a882f03f4f4e9b20098",
    },
    {
        imgPath: "https://img.freepik.com/free-photo/manager-networking_1098-14539.jpg?w=996&t=st=1695644083~exp=1695644683~hmac=2d530b65e4ab3b6c8fd4f3f2ea225f7b1aa4b3a9b9d07a882f03f4f4e9b20098",
    },
    {
        imgPath: "https://img.freepik.com/free-photo/manager-networking_1098-14539.jpg?w=996&t=st=1695644083~exp=1695644683~hmac=2d530b65e4ab3b6c8fd4f3f2ea225f7b1aa4b3a9b9d07a882f03f4f4e9b20098",
    },
];

const HeroSection = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box className={styles.carousel}>
            <Carousel
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                className={styles.autoSwipe}
                showArrows={false} // Hide arrows
                showStatus={false} // Hide slide numbers
                showThumbs={false} 
                controlDots={false}// Hide dots (indicators)
                infiniteLoop // Enable infinite loop
                autoPlay // Enable autoplay
                interval={1000} // Autoplay interval in milliseconds
                transitionTime={500} // Transition duration in milliseconds
            >
                {images.map((step, index) => (
                    <div key={index} className={styles.imageContainer}>
                        <img src={step.imgPath} alt="broken img" className={styles.image} />
                        <div className={styles.overlay}>
                            {/* Your overlay content */}
                            <h2>Lorem ipsum</h2>
                            <p>
                                dolor sit amet consectetur adipisicing elit. Similique, aliquid
                                quos, perspiciatis quia porro ex minus culpa vero, quo pariatur
                                dolorem quasi quidem numquam.
                            </p>
                            <Button>Know More</Button>
                        </div>
                    </div>
                ))}
            </Carousel>
        </Box>
    );
};

export default HeroSection;

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import DoNotDisturbOnRoundedIcon from "@mui/icons-material/DoNotDisturbOnRounded";
import styles from "../Faq/Faq.module.css";

export default function Faq() {
  const [expanded, setExpanded] = React.useState(null);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const data = [
    {
      summary: "How does an investor gain access to MF Utility?,",
      description:
        "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      summary:
        "Will investors be able to have multiple Common Account Numbers?",
      description:
        "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      summary: "How does an investor gain access to MF Utility?,",
      description:
        "Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className={styles.accordionWrapper}>
      <h2 className={styles.headFaq}>FAQ'S</h2>

      <div className={styles.accordion}>
        {data.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleAccordionChange(`panel${index}`)}
          >
        <AccordionSummary
  className={`${styles.accordionSummary} ${
    expanded === `panel${index}` ? styles.expanded : ""
  }`}
  expandIcon={
    expanded === `panel${index}` ? (
      <DoNotDisturbOnRoundedIcon style={{ color: "darkblue" }}/>
    ) : (
      <AddCircleOutlineRoundedIcon style={{ color: "black" ,opacity:"0.6"}}/>
    )
  }
>
              <Typography
                className={`${styles.button} ${
                  expanded === `panel${index}` ? styles.expandedButton : ""
                }`}
              
              >
                {item.summary}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.innerText}>
              <Typography>{item.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

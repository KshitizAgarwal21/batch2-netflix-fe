import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import "./accordions.css";
export default function Accordions(props) {
  return (
    <div className="accordion">
      <Accordion
        style={{
          background: "rgb(37, 33, 33)",
          width: "90%",
          padding: "10px 0 10px 0",
          color: "#fff",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            style={{
              fontSize: "28px",
            }}
          >
            {props.data.ques}
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ borderTop: "1px solid #000" }}>
          <Typography
            style={{
              fontSize: "28px",
            }}
          >
            {props.data.ans}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

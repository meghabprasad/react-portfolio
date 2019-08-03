import React from "react";
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import { Link, animateScroll as scroll } from "react-scroll";
import Button from '@material-ui/core/Button';
import Home from "../Home"
import { borderColor } from "@material-ui/system";
import Pdf from "../../megha-resume.pdf"
const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
      color: "white",
      borderColor: "#E2C044"
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));
export default function Section({ title, dark, id }) {
   const classes = useStyles();
  return (
    <div className={"section" + (dark ? " section-dark" : "")} id="home-section">
      <div className="section-content" id={id}>
        <p id="hi-text">Hi there,</p>
        <h1 id="name-text">I'm MEGHA BINDIGANAVALE</h1>
        <p id="bio-text">Software Engineer based in San Francisco, Bay Area. </p>
        <p id="bio-text"> I am passionate about healthcare, learning, teaching, and building exceptional products.</p>
        <br></br><br></br>
        <Link 
            activeClass="active"
            to="section6"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
        >
            <Button variant="outlined" size="large" color="secondary" className={classes.margin} id = "button">
            Get in touch
            </Button>
        </Link>

        <a href = {Pdf} target = "_blank" id = "resume-button">
        <Button variant="outlined" size="large" color="secondary" className={classes.margin} id = "button">
        RESUME 
        </Button>
        </a>
      </div>
    </div>
  );
}


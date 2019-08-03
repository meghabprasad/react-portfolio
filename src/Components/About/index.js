import React from "react";
import "./style.css"
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import MyFace from "../../../src/happy-megha.jpg";
import photo from "../../happy-face.jpg";

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")} id="about-section">
      <div className="section-content" id={id}>
      <h1 id="page-title">&#123; Who am I? &#125;</h1>
      <p id="about-text">I am a Software Engineer with a passion for integrating technologies to solve problems and improve upon existing methods.</p>

      <p id="about-text"> I enjoy leveraging background in Neurobiology and Human Behavior to provide unique perspectives on how end-users interact with websites and software platforms.</p>

      <p id="about-text"> I am passionate about approaching programming challenges from different angles, and collaborating with others to create meaningful products.</p>

      <br></br><br></br>
      <Grid container spacing ={3}>
      <Grid item xs={6} id = "first-col">

      <img alt="my happy face"src={photo} id="my-face"/>

      </Grid>

      <Grid item xs={6} id="second-col">
      
      <br></br>
      <h1>Education</h1>
      <h2>UC Berkeley Coding Bootcamp</h2>
      <p id="edu-text">Certificate in Full Stack Programming, earned August 2019</p>
      <p id="location"><i>San Francisco, CA</i></p>
      <hr></hr>
      <h2>UC Davis</h2>
      <p id ="edu-text">B.S. in Neurobiology, Physiology, and Behavior, earned June 2018</p>
      <p id="location"><i>Davis, CA</i></p>
      </Grid>
      </Grid>
      </div>
    </div>
  );
}

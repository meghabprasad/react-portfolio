import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Section from "./Components/Section";
import dummyText from "./DummyText";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home
          title="Home Page"
          dark={true}
          id="section1"
        />
        <About
          dark={false}
          id="section2"
        />
        <Skills
          dark={true}
          id="section3"
        />
        <Section
          title="Projects"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Experiences"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
        <Section
          title="Contact"
          subtitle={dummyText}
          dark={true}
          id="section6"
        />
      </div>
    );
  }
}

export default App;

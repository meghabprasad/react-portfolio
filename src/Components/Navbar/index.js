import React, { Component } from "react";
import logo from "../../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import "./style.css";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <Link 
            activeClass="active"
            onClick={this.scrollToTop}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="logo-name"
          >
          &#123;MB&#125;
          </Link>
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Experiences
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section6"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

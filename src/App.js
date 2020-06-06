import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter, } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

document.title = "Nick Maleki";

function handleLinkedin() {
  window.open("https://www.linkedin.com/in/nicholas-maleki/", '_blank');
}

function handleGithub() {
  window.open("https://github.com/nickmaleki", '_blank');
}

function handleMail() {
  window.open("mailto:nicholasmaleki@gmail.com", '_blank');
}

function handleTwitter() {
  window.open("https://twitter.com/malekinick", '_blank');
}

function App() {
  return (
    <div id="navi">
      <Particles
        params={{
          particles: {
            opacity: 1,
            color: "#ed7e48",
            number: {
              value: 100
            },
            size: {
              value: 5
            },
          },
          background: {
            image: "linear-gradient(135deg, #ffffff -100%, #093f79 50%)"
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              }
            }
          }
        }}
      >
      </Particles>

      <div className="mainflex">
        <h1 className="centered" style={{top: '-55px', color: '#ffffff' }}>Nick Maleki</h1>
        <ul id="nav-links">
          <li>
            <FontAwesomeIcon className="icon" icon={faLinkedin} color="#ffffff" size="2x" onClick={handleLinkedin} />
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faGithub} color="#ffffff" size="2x" onClick={handleGithub} />
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faEnvelope} color="#ffffff" size="2x" onClick={handleMail} />
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faTwitter} color="#ffffff" size="2x" onClick={handleTwitter} />
          </li>
        </ul>
      </div>

    </div>
  );
}

export default App;

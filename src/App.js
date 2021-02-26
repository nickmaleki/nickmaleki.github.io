import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter, } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

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

function handleResume() {
  window.open("https://nickmaleki.com/resume", '_blank');
}


function App() {
  return (
    <div className="App">
      <div id="particles">
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
              line_linked: {
                distance: 200,
              }
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
      </div>
      <div className="mainflex">
        <h1 className="centered" style={{ top: '-70px', color: '#ffffff' }}>Nick Maleki</h1>
        <ul id="nav-links">
          <li>
            <img src="LinkedIn.svg" width="40px" onClick={handleLinkedin} />
          </li>
          <li>
            <img src="GitHub.svg" width="40px" onClick={handleGithub} />
          </li>
          <li>
            <img src="Mail.svg" width="40px" onClick={handleMail} />
          </li>
          <li>
            <img src="Twitter.svg" width="40px" onClick={handleTwitter} />
          </li>
          <li>
            <img src="Resume.svg" width="40px" onClick={handleResume} />
          </li>
        </ul>
      </div>

      
    </div>
  );
}

export default App;

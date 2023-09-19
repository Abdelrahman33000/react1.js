
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import logo1 from './natu.jpeg';


function App() {
  return (
    <div className="App ">
      <header className="hero-section text-light ">
        <Container   >
          <h1>Abdelrahman Abdelwahab </h1>
          <p>Civel Engineer</p>
          <button type="button" className="btn btn-outline-info " >Get Start</button>
        </Container>
      </header>

      <section className="about-section mt-0 p-1 ">
        <Container>
          <h2>About Me</h2>
          <p className='m-1'> The About Us page of your website is an essential source of information for all who want to know more about your business. </p>
        <p>About Us pages are where you showcase your history, what is unique about your work, your companys values, and who you serve.</p>
              <button type="button" className="btn btn-outline-info col sm ={2}" >see more</button>
          <Row>
            <Col sm={6}>
              <h3>Education</h3>
              <p>Place your education information here.</p>
            </Col>
            <Col sm={6}>
              <h3>Experiences</h3>
              <p>Place your experiences information here.</p>
              <a href="/path/to/resume.pdf" download>Download Resume</a>
            </Col>
          </Row>
        
        </Container>
      </section>

      <section className="skills-section bg-dark text-light">
        <Container>
          <h2>Skills</h2>
          <p>Place your skills information here.</p>
        </Container>
                  <Row className='container'>
            <Col sm={6}>
     <label for="customRange3" class="form-label">html</label>
    <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3"></input>
      <label for="customRange3" class="form-label"> css</label>
    <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3"></input>
      <label for="customRange3" class="form-label"> js</label>
    <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3"></input>
      <label for="customRange3" class="form-label"> es6</label>
    <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3"></input>
      <label for="customRange3" class="form-label"> bootstrap</label>
    <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3"></input>
            </Col>
            <Col sm={6}>
              <br></br>
              <p>html</p>
              <br></br>
              <p>css</p>
              <br></br>
              <p>js</p>
              <br></br>
              <p>es6</p>
              <br></br>
              <p>bootstrap</p>
            </Col>
          </Row>
      </section>


      <section className="portfolio-section bg-info">
        <Container>
          <h2 className='text-center'>Portfolio and Projects</h2>
          <div className='card1 '>
          <img src={logo1} className='logo1 m-2 p-3 ' alt="logo1" width={300}/>
                </div>
          <img src={logo1} className='logo1 m-2 ' alt="logo1" width={300}/>
          <img src={logo1} className='logo1 m-2 ' alt="logo1" width={300}/>
          <img src={logo1} className='logo1 m-2 ' alt="logo1" width={300}/>
            <img src={logo1} className='logo1 m-2 ' alt="logo1" width={300}/>
          <img src={logo1} className='logo1 m-2 ' alt="logo1" width={300}/>
            <img src={logo1} className='logo1 m-2 ' alt="logo1" width={300}/>
          <img src={logo1} className='logo1 m-2 ' alt="logo1" width={300}/>
          <img src={logo1} className='logo1 m-2 ' alt="logo1" width={300}/>
          <img src={logo1} className='logo1 m-2 ' alt="logo1" width={300}/>
            <img src={logo1} className='logo1 m-2 ' alt="logo1" width={300}/>
          <img src={logo1} className='logo1 m-2 ' alt="logo1" width={300}/>
        </Container>
      </section>

      <footer className="footer-section bg-dark text-light ">
        <Container>
          <h2>Contact Us</h2>
          <Row>
            <Col sm={3}>
              <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
            </Col>
            <Col sm={3}>
              <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
            </Col>
            <Col sm={3}>
              <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
            </Col>
            <Col sm={3}>
              <a href="https://www.github.com"><FontAwesomeIcon icon={faGithub} /></a>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;

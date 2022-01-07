import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Home = () => {
    return (
        <section id="Home">
            <h1 style={{ fontWeight: "bold", textAlign: "center", paddingTop: "50px", fontSize:"60px" }}>Hi, i am <span style={{ color: "skyblue" }}>Cecilia Wambui. </span></h1>
            <h3 style={{ fontWeight: "bold", textAlign: "center", paddingTop: "px" }}>A Junior Software Developer</h3>
            <Row>
                <Col></Col>
                <Col xs={6}>
                    <p style={{  paddingTop: "px" }}>I am a passionate Junior Software Developer with an undergraduate degree
                        in Bachelor of Science in Software Development from KCA University
                        (Completed coursework in December 2021) - Awaiting graduation. I have
                        gained experience through personal projects and internships where I have
                        learnt hands-on coding, software development processes, programming
                        frameworks(Django & ReactJS), user interface design, testing and
                        debugging, working and collaborating with teams. I am excited to learn and
                        grow in software development and currently looking for a role as a Junior
                        Software Developer or Internship and available to start in January 2022.</p>
                </Col>
                <Col>
               
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col xs={4} style={{display: 'inline', textAlign:"center"}}>
            <Button href='Cecilia Wambui Resume.pdf' variant="dark" style={{ fontWeight: "bold", textAlign: "center", paddingTop: "px" }}>Resume</Button>     <a href='https://github.com/ceciliawambui'><BsGithub/></a>    <a href='https://www.linkedin.com/in/cecilia-wambui-93aa73183'><BsLinkedin/></a>
   
            </Col>
            <Col></Col>
            </Row>
        </section>
    )
}

export default Home

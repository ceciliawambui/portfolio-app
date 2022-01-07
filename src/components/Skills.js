import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
// import { BsGithub, BsFillArrowUpRightSquareFill } from 'react-icons/bs';

const Skills = () => {
    return (
        <section id="Skills">
            <h1 style={{ fontWeight: "bold", paddingTop: "50px", textAlign:"center" }}>SKILLS</h1>
            <div style={{ margin: "20px", textAlign: "center" }} >

                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col>


                        <Card style={{ width: '10rem', backgroundColor: "#36454F" }} className='card'>
                            <Card.Body>
                                {/* <Card.Title>Project 1</Card.Title> */}
                                <Card.Title style={{ fontSize:"16px" }}>HTML</Card.Title>
                               
                            </Card.Body>
                        </Card>
                        
                    </Col>
                    <br />
                    <Col>
                        <Card style={{ width: '10rem', backgroundColor: "#36454F" }} className='card'>
                            <Card.Body>
                                {/* <Card.Title>Project 1</Card.Title> */}
                                <Card.Title style={{  fontSize:"16px" }}>CSS</Card.Title>
                               
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>
                    <Col>
                        <Card style={{ width: '10rem', backgroundColor: "#36454F" }} className='card'>
                            <Card.Body>
                                {/* <Card.Title>Project 1</Card.Title> */}
                                <Card.Title style={{ fontSize:"16px" }}>React Bootstrap</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <br />
                    <Col>
                        <Card style={{ width: '10rem', backgroundColor: "#36454F" }} className='card'>
                            <Card.Body>
                                {/* <Card.Title>Project 1</Card.Title> */}
                                <Card.Title style={{  fontSize:"16px" }}>Beautiful Soup</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>

                <Row>
                <Col></Col>
                    <Col></Col>
                    <Col>

                        <Card style={{ width: '9rem', backgroundColor: "#36454F" }} className='card'>
                            <Card.Body>
                                {/* <Card.Title>Project 1</Card.Title> */}
                                <Card.Title style={{ fontSize:"16px" }}>Python</Card.Title>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                    <br />
                    <Col>
                        <Card style={{ width: '9rem', backgroundColor: "#36454F" }} className='card'>
                            <Card.Body>
                                {/* <Card.Title>Project 1</Card.Title> */}
                                <Card.Title style={{fontSize:"16px" }}>Django</Card.Title>
                               
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>
                    <Col>
                        <Card style={{ width: '9rem', backgroundColor: "#36454F" }} className='card'>
                            <Card.Body>
                                {/* <Card.Title>Project 1</Card.Title> */}
                                <Card.Title style={{ fontSize:"16px" }}>ReactJS</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <br />
                    <Col>
                        <Card style={{ width: '9rem', backgroundColor: "#36454F" }} className='card'>
                            <Card.Body>
                                {/* <Card.Title>Project 1</Card.Title> */}
                                <Card.Title style={{ fontSize:"16px" }}>JavaScript</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>

                <Row>
                <Col></Col>
                    <Col></Col>
                    <Col>

                        <Card style={{ width: '8rem', backgroundColor: "#36454F" }} className='card'>
                            <Card.Body>
                                {/* <Card.Title>Project 1</Card.Title> */}
                                <Card.Title style={{ fontSize:"16px"}}>PostgreSQL</Card.Title>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                    <br />
                    <Col>
                        <Card style={{ width: '8rem', backgroundColor: "#36454F" }} className='card'>
                            <Card.Body>
                                {/* <Card.Title>Project 1</Card.Title> */}
                                <Card.Title style={{ fontSize:"16px" }}>MySQL</Card.Title>
                               
                            </Card.Body>
                        </Card>
                        <br />
                    </Col>
                    <Col>
                        <Card style={{ width: '8rem', backgroundColor: "#36454F" }} className='card'>
                            <Card.Body>
                                {/* <Card.Title>Project 1</Card.Title> */}
                                <Card.Title style={{ fontSize:"16px" }}>Heroku</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <br />
                    <Col>
                        <Card style={{ width: '8rem', backgroundColor: "#36454F" }} className='card'>
                            <Card.Body>
                                {/* <Card.Title>Project 1</Card.Title> */}
                                <Card.Title style={{ fontSize:"16px" }}>Android</Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </div>
        </section>
      
    )
}

export default Skills

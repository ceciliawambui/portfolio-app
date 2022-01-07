import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { BsGithub, BsFillArrowUpRightSquareFill } from 'react-icons/bs';



const Projects = () => {
    
    return (
        <section id="Projects">
            <h1 style={{ fontWeight: "bold", textAlign: "center", paddingTop: "50px" }}>PROJECTS</h1>
            <div style={{margin:"20px"}} >
                <Row>
                    <Col>
             
                <Card style={{ width: '18rem', backgroundColor:"#36454F" }} className='card'>
                    <Card.Body>
                        {/* <Card.Title>Project 1</Card.Title> */}
                        <Card.Title style={{textAlign:"center", fontWeight:"bold"}}>Personal Portfolio</Card.Title>
                        <Card.Text style={{textAlign:"center"}}>
                            A personal portfolio created using HTML and CSS Bootstrap. 
                            Deployed in GitHub pages.
                        </Card.Text>
                        <Card.Text style={{textAlign:"center"}} >HTML,  CSS,  Bootstrap</Card.Text>
                        {/* <img style={{width: "250px"}}src='portfolio.png'></img> */}
                        <div style={{textAlign:"center"}}>
                        <Card.Link href="https://github.com/ceciliawambui/ceciliawambui.github.io"><BsGithub/></Card.Link>
                        <Card.Link href="https://ceciliawambui.github.io/"><BsFillArrowUpRightSquareFill/></Card.Link>
                        </div>
                   </Card.Body>
                </Card>
                </Col>
                <br/>
                <Col>
                <Card style={{ width: '18rem', backgroundColor:"#36454F" }} className='card'>
                    <Card.Body>
                        {/* <Card.Title>Project 1</Card.Title> */}
                        <Card.Title style={{fontWeight:"bold", textAlign:"center"}}>A Freelance Project</Card.Title>
                        <Card.Text style={{textAlign:"center"}}>
                           An asylum predictor application created using ReactJS and React Bootstrap.
                           Deployed in Heroku.
                        </Card.Text>
                        <Card.Text style={{textAlign:"center"}}>ReactJS, React Bootstrap</Card.Text>
                        {/* <img style={{width: "250px"}}src='portfolio.png'></img> */}
                        <div style={{textAlign:"center"}}>
                        <Card.Link href="https://github.com/ceciliawambui/asylum-frontend"><BsGithub/></Card.Link>
                        <Card.Link href="https://asylum-frontend.herokuapp.com/"><BsFillArrowUpRightSquareFill/></Card.Link>
                        </div>
                   </Card.Body>
                </Card>
                <br/>
                </Col>
                <Col>
                <Card style={{ width: '18rem', backgroundColor:"#36454F" }} className='card'>
                    <Card.Body>
                        {/* <Card.Title>Project 1</Card.Title> */}
                        <Card.Title  style={{fontWeight:"bold", textAlign:"center"}}>An E-commerce Website </Card.Title>
                        <Card.Text style={{textAlign:"center"}}>
                           An E-commerce Website using WordPress and MySQL.
                           Deployed in Heroku.
                        </Card.Text>
                        <Card.Text style={{textAlign:"center"}}>WordPress,   MySQL</Card.Text>
                        {/* <img style={{width: "250px"}}src='portfolio.png'></img> */}
                        <div style={{textAlign:"center"}}>
                        {/* <Card.Link href="https://github.com/ceciliawambui/ceciliawambui.github.io"><BsGithub/></Card.Link> */}
                        <Card.Link href="https://skylarkfashiondesigns.xyz/"><BsFillArrowUpRightSquareFill/></Card.Link>
                        </div>
                   </Card.Body>
                </Card>
                </Col>
                <br/>
                <Col>
                <Card style={{ width: '18rem', backgroundColor:"#36454F" }} className='card'>
                    <Card.Body>
                        {/* <Card.Title>Project 1</Card.Title> */}
                        <Card.Title  style={{fontWeight:"bold", textAlign:"center"}}>A Freelance Project</Card.Title>
                        <Card.Text  style={{textAlign:"center"}}>
                            A web scraping project using Python and BeautifulSoup.
                            Deployed in GitHub pages.

                        </Card.Text>
                        <Card.Text style={{textAlign:"center"}}>Python, BeautifulSoup</Card.Text>
                        {/* <img style={{width: "250px"}}src='portfolio.png'></img> */}
                        <div style={{textAlign:"center"}}>
                        <Card.Link href="https://github.com/ceciliawambui/mystocks_scrapper"><BsGithub/></Card.Link>
                        {/* <Card.Link href="https://ceciliawambui.github.io/"><BsFillArrowUpRightSquareFill/></Card.Link> */}
                        </div>
                   </Card.Body>
                </Card>
                </Col>
                </Row>
            </div>
        </section>
    )
}

export default Projects

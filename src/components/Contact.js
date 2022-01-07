import React from 'react';
// import { Button, Row, Col } from 'react-bootstrap';
import {BsFillTelephoneFill, BsEnvelopeFill} from 'react-icons/bs';

const Contact = () => {
    return (
        <section id="Contact">
            <h1 style={{ fontWeight: "bold", textAlign: "center", paddingTop: "50px" }}>CONTACT</h1>
            <div style={{textAlign:"center"}}>
            <a class="mailto" href="mailto:ceciliawambui026@gmail.com"><BsEnvelopeFill/></a> Email me
            <p><BsFillTelephoneFill/> +254716894482</p>
    
          </div>
           

        </section>
    )
}

export default Contact

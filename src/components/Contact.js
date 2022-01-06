import React from 'react';
// import { Button, Row, Col } from 'react-bootstrap';
import {BsFillTelephoneFill, BsEnvelopeFill} from 'react-icons/bs';

const Contact = () => {
    return (
        <div>
            <h1 style={{ fontWeight: "bold", textAlign: "center", paddingTop: "50px" }}>CONTACT</h1>
            <div style={{textAlign:"center"}}>
            <p><BsEnvelopeFill/> Email me</p>
            <p><BsFillTelephoneFill/> +254716894482</p>
          
          </div>
           

        </div>
    )
}

export default Contact

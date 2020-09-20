import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import logo from './../../../src/author.jfif';
import './footer.css';

export default class Footer extends React.Component {
    

    render(){
        return(
            
            <Container>

                <Row>
                   <Col></Col>
                   <Col></Col>
                   <Col>
                   <h5>Pastry Chef:</h5>
                    <Image className="pp-author-img" src={logo} roundedCircle />
                    <h4><strong>Kushal Shrestha</strong></h4>
                    <p>Software Engineer at Cotiviti. Loves data, football.<br/>
                    https://www.linkedin.com/in/kushal-shrestha/
                    </p>
                   </Col> 
                </Row>
            </Container>
        );
    }
}
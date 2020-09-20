import React from 'react';
// import { Container } from 'react-bootstrap';
import portfolio1 from './../../bpazes-enhancement.png';
import portfolio2 from './../../smoothbalance.jpg';
import portfolio3 from './../../boogle1.png';
import { Container, Row, Col} from 'react-bootstrap';

export default class WorkSection extends React.Component {

    render(){
        return(
            <section class="my-work" id="work">
                <h2 class="my-work-title">My work</h2>
                <p class="section__subtitle"></p>
                <br/>
                <div class="portfolio">
                <Container>
                <Row>
                    <Col xs={3}>  
                    <a href="#" class="portfolio__item">
                        <img src={portfolio1} alt="" class="portfolio__img"/>
                    </a>  
                    </Col>
                    
                    <Col xs={5}>
                        <h3>Bpazes</h3>
                        <p>Website : https://bpazes.com/ <br/>
                        Role : Database developer <br/>
                        Used : MySQL, Figma (for designing new prototype)<br/>
                        Description : Currently working on online business directory - database design, PL/SQL.<br/>
                        Github : https://github.com/kushalshrestha/bpazesSQL (private repo) </p>

                    </Col>
                </Row> 
                <Row>
                <Col xs={{span: 5, offset:4}}>
                        <h3>Smoothbalance</h3>
                        <p>Website : https://smoothbalance.com/ <br/>
                        Role : API developer <br/>
                        Language : PHP<br/>
                        Description : Invoicing app for small businesses<br/>
                        Github : https://github.com/Pradip5552/SmoothBalance (private repo, worked as a contributors) </p>

                    </Col>
                    <Col xs={3}>  
                    <a href="#" class="portfolio__item">
                        <img src={portfolio2} alt="" class="portfolio__img"/>
                    </a>  
                    </Col>
                    
                </Row> 
                <Row>
                    <Col xs={3}>  
                    <a href="#" class="portfolio__item">
                        <img src={portfolio3} alt="" class="portfolio__img"/>
                    </a>  
                    </Col>
                    <Col xs={5}>
                        <h3>Boggle Game</h3>
                        <p>Personal Project for learning ReactJS and Ruby on Rails<br/>
                        Used : ReactJS, Ruby on Rails<br/>
                        Github : https://github.com/kushalshrestha/Boggle </p>
                    </Col>
                </Row>   
                
                
                </Container>   
                
                

                </div>

            </section>
            );
    }
}
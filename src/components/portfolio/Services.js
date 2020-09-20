import React from 'react';
// import { Container } from 'react-bootstrap';
import SunburstChart from './../data-visualization-using-nivo/sunburstchart/sunburst.js';
import { Container, Row, Col} from 'react-bootstrap';

export default class ServiceSection extends React.Component {

    render(){
        return(
            <section class="my-services" id="services">
            <h2 class="section__title section__title--services">What Have I Learned In My Career</h2>
            <div class="services">
                <Container>
                    <Row>
                        <Col>
                            <div class="service">
                            <SunburstChart/>
                            </div> 
                        </Col>
                        <Col>
                            <div class="service">
                                <h3>1. Born for working on data</h3>
                                <p>Experienced with working on health data projects and I believe I'm good at data analysis.</p>
                                <br/>
                                <h3>2. Loves designing and playing with colors</h3>
                                <p>Tries demonstrating my skills in front end although worked as database engineer mostly. Creative with colors.</p>
                                <br/>
                                <h3>3. Learn, Learn and Learn</h3>
                                <p>A never ending process.</p>
                            </div> 
                        </Col>
                        
                    </Row>
                </Container>
            </div> 
            
            <a href="#work" class="btn">My Work</a>
        </section>
            


    
    
    
            );
    }
}
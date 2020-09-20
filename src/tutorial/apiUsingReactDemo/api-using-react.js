import React, { Component } from 'react';
import ApiUsingReactDemo from './api-using-react-demo';
import { Container, Row, Col } from 'react-bootstrap';
import '../counter/counter.css';

export default class APIusingReact extends Component {
    title = "API Using React";
    level = "Intermediate";
    source = "https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2";

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <Container>
                    <h1>{this.title}</h1>
                    <h6>{this.level}</h6>
                    <h6>{this.source}</h6>
                    <hr/>
                    <Row>
                        <Col xs={5}>

                        </Col>
                        <Col>
                            {/* <div className="demo-fix"> */}
                            <ApiUsingReactDemo ></ApiUsingReactDemo>
                            {/* </div>    */}
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}
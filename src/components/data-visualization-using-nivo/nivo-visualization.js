import React from 'react';
import "./data-visualization-using-nivo.css";
import NivoVisualizationBarChart from './barchart/barchart.js';
import SkillsChart from './pieChart/piechart.js';
import SunburstChart from './sunburstchart/sunburst.js';
import { Container , Row, Col} from 'react-bootstrap';


export default class NivoVisualization extends React.Component {
    // MyResponsiveBar = ({barData}) => (

    // ); 

    constructor(props) {
        super(props);

        this.state = {

        }
    }




    render() {


        return (
            <Container>
                <h1>Dashboard</h1>
                <hr />
                <Row>
                <NivoVisualizationBarChart></NivoVisualizationBarChart>
                </Row>
                <Row>
                <Col>
                    <NivoVisualizationBarChart></NivoVisualizationBarChart>
                </Col>
                <Col>
                    <NivoVisualizationBarChart></NivoVisualizationBarChart>
                </Col>
                </Row>
                <Row>
                <Col>
                    <SkillsChart/>
                </Col>
                <Col>
                    <SunburstChart/>
                </Col>
                </Row>
                
            </Container>
        )
    }

}
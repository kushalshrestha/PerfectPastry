import React from 'react';
import { ResponsiveSunburst } from '@nivo/sunburst'
import skillsdata from './../assets/skills-sunburst.json';
import { Row, Col} from 'react-bootstrap';

import './sunburst.css';


export default class SunburstChart extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <div className="sunburstChart">
                <Col className="pp_chart_title">Skills & Tools from Work Experience</Col>
                
                <ResponsiveSunburst
                    data={skillsdata}
                    margin={{ top: 40, right: 20, bottom: 20, left: 20 }}
                    identity="name"
                    value="loc"
                    cornerRadius={4}
                    borderWidth={2}
                    borderColor="var(--clr-dark)"
                    colors={{ scheme: 'nivo' }}
                    childColor={{ from: 'color' }}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    isInteractive={true}
                />
            </div>
        );
    }


    
}

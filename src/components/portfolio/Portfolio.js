import React from 'react';

import IntroSection from './IntroSection.js';
import ServiceSection from './Services.js';
import AboutSection from './AboutSection.js';
import WorkSection from  './WorkSection.js';
import FooterSection from './FooterSection.js';


import './Portfolio.css';

export default class Portfolio extends React.Component {

    render(){
        return(
        <div>
            <IntroSection/>
            <ServiceSection/>
            <AboutSection/>
            <WorkSection/>
            <FooterSection/>
        </div>
        );
    }
}
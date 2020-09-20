import React from 'react';
// import { Container } from 'react-bootstrap';

import logo from './../../author.jfif';

export default class IntroSection extends React.Component {

    render(){
        return(
            <section class="intro" id="home">
                <h1 class="section__title section__title--intro">
                Hi, I am <strong>Kushal Shrestha</strong>
                </h1> 
                <p class="section__subtitle section__subtitle--intro">Software Developer</p>  
                <img src={logo} alt=""></img> 
            </section>
            );
    }
}
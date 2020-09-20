import React from 'react';
// import { Container } from 'react-bootstrap';


export default class FooterSection extends React.Component {
    render() {
        return(
        <footer className="footer">
            <h2 class="section__title">Get in Touch</h2>
            <a href="mailto:kushalshr@gmail.com" class="footer__link">kushalshr@gmail.com</a>
            <ul class="social-list">
                <li class="social-list__item">
                    <a class="social-list__link" href="https://linkedin.com/in/kushal-shrestha">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://github.com/kushalshrestha">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
                
            </ul>
        </footer>
        );
    }
}
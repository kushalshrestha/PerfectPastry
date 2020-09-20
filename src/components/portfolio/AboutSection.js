import React from 'react';
// import { Container } from 'react-bootstrap';

import logo from './../../author1.jfif';
import logo1 from './../../about.jpg';

export default class AboutMeSection extends React.Component {

    render(){
        return(
            <section class="about-me" id="about">
           <h2 class="section__title section__title--about">Who I am</h2>
           <p class="section__subtitle section__subtitle--about">From Kathmandu. Loves Data and Football.</p>
           
           <div class="about-me__body">
               <p> You can call me a software engineer, experienced database developer and front-end development learner.
                   I have a experience of 4+ years in computer industry where I have a demonstrated history of working in the
                   computer software industry. Skilled in MySQL, MS-SQL Server, Java, PHP, Unit Testing and Agile Methodologies. Worked as a Database Engineer for 
                   Spiralogics Inc for 3 years and currently working at Cotiviti since March 2019.
               </p>
                <p>I define myself as a continuous learner and prefer to keep learning and challenge myself.</p>
               <b>Honors-Awards</b>
               <p>Angular Attack 2018 (Public Favorite for project - Multilayout Generator</p>
               <p>React Riot Winner (Hackers Favorite for project - A good day to quiz hard</p>
           </div>
           
           <img src={logo} alt="Jane leaning against a bus" class="about-me__img"/>
        </section>
            );
    }
}
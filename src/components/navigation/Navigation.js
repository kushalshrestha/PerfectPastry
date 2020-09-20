import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from "react-router-dom"
import logo from './../../perfectpastry_logo.png';
import './Navigation.css';

import Note from './../notes/note.js';
import NivoVisualization from '../data-visualization-using-nivo/nivo-visualization.js';
import PortfolioComponent from '../portfolio/Portfolio.js';

//tutorial links
import Counter from '../../tutorial/counter/counter';
import APIusingReact from '../../tutorial/apiUsingReactDemo/api-using-react'


class Navigation extends React.Component {
  
  constructor(props) {
    super(props);
    // this.addActiveClass = this.addActiveClass.bind(this);
    this.state = {
      value: 1,
      active: false,
      
    };
    console.log(this.state);
    
    
    
    //creatingt a ref to store the navigation node 
    this.ref = React.createRef();
    
  }

  componentDidMount(){
    
  }

  toggleClass() {
    const currentState = this.state.active;
    
    this.setState({
      active: !currentState,
      
    });
  }

  hideNavBar(){
    const currentState = this.state.active;
    
    this.setState({
      active: !currentState,
      
    });
  }

  render() {
    return (
      <Router>
        <header>
          <div className="logo">
            <a className="navbar-brand" href="/"><img className="pp-logo" src={logo} alt="logo" /></a>
          </div>
          <button className={this.state.active ? 'nav-toggle nav-open' : 'nav-toggle'} aria-label="toggle navigation" onClick={() =>{ this.toggleClass()}}>
            <span className="hamburger"></span>
          </button>
          <nav className={this.state.active ? 'nav nav-show' : 'nav'}>
            <ul className="nav__list">
              <li ref={(ctx)=>this.ref = ctx} onClick={() =>{ this.hideNavBar()}} className="nav__item"><a href="#home" className="nav__link"><NavLink to="/" exact activeClassName="active">Home</NavLink></a></li>
              {/* <li ref={(ctx)=>this.ref = ctx} onClick={() =>{ this.hideNavBar()}} className="nav__item"><a href="#services" className="nav__link"><NavLink to="/about" exact activeClassName="active">About</NavLink></a></li>
              <li ref={(ctx)=>this.ref = ctx} onClick={() =>{ this.hideNavBar()}}className="nav__item"><a href="#about" className="nav__link"><NavLink to="/about/contact" activeClassName="active">Contact</NavLink></a></li>
              <li ref={(ctx)=>this.ref = ctx} onClick={() =>{ this.hideNavBar()}} className="nav__item"><a href="#work" className="nav__link"><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></a></li>
              <li ref={(ctx)=>this.ref = ctx} onClick={() =>{ this.hideNavBar()}} className="nav__item"><a href="#work" className="nav__link"><NavLink to="/cheatsheet" exact activeClassName="active">Note</NavLink></a></li> */}
              <li ref={(ctx)=>this.ref = ctx} onClick={() =>{ this.hideNavBar()}} className="nav__item"><a href="#work" className="nav__link"><NavLink to="/data-visualization-using-nivo" exact activeClassName="active">Data Visualization</NavLink></a></li>
              {/* <li ref={(ctx)=>this.ref = ctx} onClick={() =>{ this.hideNavBar()}} className="nav__item"><a href="#work1" className="nav__link"><NavLink to="/tutorial/api_using-react" exact activeClassName="active">APIUsingReact</NavLink></a></li> */}
            </ul>
          </nav>


          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto nav__item nav__list">
          <li className="nav-item nav__link"><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li className="nav-item nav__link"><NavLink to="/about" exact activeClassName="active">About</NavLink></li>
          <li className="nav-item nav__link"><NavLink to="/about/contact" activeClassName="active">Contact</NavLink></li>
          <li className="nav-item nav__link"><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
          <li className="nav-item nav__link"><NavLink to="/cheatsheet" exact activeClassName="active">Note</NavLink></li>
          <li className="nav-item nav__link"><NavLink to="/data-visualization-using-nivo" exact activeClassName="active">Data Visualization</NavLink></li>
        </ul>
        </div>
        </nav> */}


          <Switch>
            <Route path="/" exact component={PortfolioComponent} />
            {/* <Route path="/about/contact" component={ContactComponent} /> */}
            {/* <Route path="/about/:topicId" component={AboutComponent} /> */}
            {/* <Route path="/about" component={AboutComponent} /> */}
            {/* <Route path="/dashboard" exact render={(props) => <DashboardComponent {...props} isAuth={true} />} /> */}
            {/* <Route path="/tutorial/counter" component={Counter} /> */}
            {/* <Route path="/tutorial/api_using_react" component={APIusingReact} /> */}
            <Route path="/data-visualization-using-nivo" component={NivoVisualization} />
            {/* <Route path="/cheatsheet" component={Note} /> */}

            <Redirect to="/" />
          </Switch>
        </header>
      </Router>
    );
  }

}


// const HomeComponent = () => {
//     return(
//       <div><h1>Home Component</h1></div>
//     );
//   }
// const ContactComponent = () => {
//   return (
//     <div><h1>Contact Component</h1></div>
//   );
// }
// const AboutComponent = ({ match }) => {
//   console.log(match);
//   return (
//     <React.Fragment>
//       <div><h1>About Component</h1></div>
//       <p>The topic id is {match.params.topicId}</p>
//     </React.Fragment>

//   );
// }
// const DashboardComponent = ({ isAuth }) => {
//   return (
//     <React.Fragment>
//       <div><h1>Dashboard Component</h1></div>
//       <p>{isAuth ? "Authorized" : "Not Authorized"}</p>
//     </React.Fragment>
//   );
// }

export default Navigation;

/*
<Router>
        <header>
        <ul>
          <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" exact activeClassName="active">About</NavLink></li>
          <li><NavLink to="/about/contact" activeClassName="active">Contact</NavLink></li>
          <li><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
        </ul>

        <Switch>
            <Route path="/" exact component={HomeComponent}/>
            <Route path="/about/contact" component={ContactComponent} />
            <Route path="/about/:topicId" component={AboutComponent} />
            <Route path="/about" component={AboutComponent} />
            <Route path="/dashboard" exact render={(props) => <DashboardComponent {...props} isAuth={true} />} />
            <Redirect to="/"/>
        </Switch>
      </header>
      </Router>
*/
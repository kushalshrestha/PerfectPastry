import React from 'react';
// import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from "react-router-dom"
// import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/footer.js';

//import fontawesome library
import './components/library/fontawesome/fontawesome.js' ;
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



function App() {
  return (
    <div className="App">
      
      <div className=""> 
        
        <Navigation></Navigation>
        
      </div>
      
      
    </div>
  );
}

export default App;




/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/

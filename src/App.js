import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import ContactUs from './ContactUs';

function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
    <Switch>
    <Route exact path="/" component={HomePage}></Route>
    <Route path="/contact-us" component={ContactUs}></Route>
    </Switch>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;

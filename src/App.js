import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ContactUs from './components/ContactUs';

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

import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Team from './components/pages/Team';
import Contact from './components/pages/Contact';
import Download from './components/pages/Download';
import Verification from './components/pages/Verification';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/team' component={Team} />
          <Route path='/contact' component={Contact} />
          <Route path='/download' component={Download} />
          <Route path='/verification' component={Verification} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

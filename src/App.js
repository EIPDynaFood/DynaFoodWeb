import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Services from './components/pages/Services';
import Team from './components/pages/Team';
import Contact from './components/pages/Contact';
import Download from './components/pages/Download';
import Verification from './components/pages/Verification';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Profil from './components/pages/Profil';
import Validation from './components/pages/Validation'
import ResetPassword from './components/pages/ResetPassword';
import SendEmail from './components/pages/SendEmail';
import ResetCode from './components/pages/ResetCode';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/DynaFoodWeb" component={Home} />
          <Redirect from="/DynaFoodWeb" to="/" />
          <Route path='/services' component={Services} />
          <Route path='/team' component={Team} />
          <Route path='/contact' component={Contact} />
          <Route path='/download' component={Download} />
          <Route path='/verification' component={Verification} />
          <Route path='/login' component={Login} />
          <Route path='/profil' component={Profil} />
          <Route path='/register' component={Register} />
          <Route path='/validation' component={Validation} />
          <Route path='/resetPassword' component={ResetPassword} />
          <Route path='/resetCode' component={ResetCode} />
          <Route path='/sendEmail' component={SendEmail} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

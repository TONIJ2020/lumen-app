import React, { Component } from 'react';
import './Styles/App.css';
import LoginForm from './components/Pages/LoginForm';
import axios from 'axios';
import RegistrationForm from './components/Pages/RegistrationForm';
import Footer from './components/Pages/Footer';
import NavBar from './components/Menu/NavBar/NavBar';
import Home from './components/Pages/Home';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Projects from './components/Pages/Projects';
import About from './components/Pages/About';
import Kubwa from './components/Pages/Kubwa';
import Mabushi from './components/Pages/Mabushi';
import Wuye from './components/Pages/Wuye';

export default class App extends Component {

  state = {};

  componentDidMount = () => {
    axios.get('user').then(
      res => {
        this.setUser(res.data);
      },
      err => {
        console.log(err)
      }
    )
  };

  setUser = user => {
    this.setState({
      user: user
    });
  }

  render() {

    return (
      <>
        <BrowserRouter>
          <div className="App">
            <NavBar user={this.state.user} setUser={this.setUser} />
              <div className="container d-flex align-items-center flex-column">
                <Switch>
                  <Route exact path="/" component={() => <Home user={this.state.user} />} />
                  <Route exact path="/login" component={() => <LoginForm setUser={this.setUser} />} />
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/register" component={RegistrationForm} />
                  <Route exact path="/projects" component={Projects} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/kubwa" component={Kubwa} />
                  <Route exact path="/mabushi" component={Mabushi} />
                  <Route exact path="/wuye" component={Wuye} />
                  {/*<Route exact path="/dashboard" component={dashboard} />
                  <Route exact path="/reset:id" component={Reset} />
                  <Route exact path="/adaobifarm" component={Adaobifarm} />
                  <Route exact path="/uchefarm" component={Uchefarm} />
                  <Route exact path="/okorofarm" component={Okorofarm} />
                  <Route exact path="/projects" component={Projects} /> */}
                </Switch>
              </div>
            <Footer />
          </div>
        </BrowserRouter>
      </>
    );
  }
}

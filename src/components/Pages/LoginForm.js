import React, { Component } from 'react';
import axios from 'axios';
import '../../Styles/RegistrationForm.css';
import { withRouter } from "react-router-dom";

class LoginForm extends Component {

    state = {};

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password
        }

        axios.post('/user/sign-in', data)
            .then(res => {
                localStorage.setItem('userData', JSON.stringify(res.data.user));
                this.setState ({
                    loggedIn: true
                });
                this.props.setUser(res.data.user);
                this.props.history.push("/dashboard");
            }).catch(err => {
                this.setState({
                    message: err.response.data.message
                })
            })
    };
    redirectToHome = () => {
        this.props.history.push('/home');
    }
    redirectToRegister = () => {
        this.props.history.push('/register'); 
    }

    redirectToLoginLogin = () => {
        this.props.history.push('/login/#login');
    }

    render() {
        let error = '';

        if(this.state.message) {
            error = (
                <div className="alert alert-danger" role="alert">
                    {this.state.message}
                </div>
            )
        }

        return(
            <div onSubmit={this.handleSubmit} className="card col-12 col-lg-4 login-card mt-2 hv-center">  
                <form>
                    {error}
                    <br />               
                    <br />               
                    <h1 id="login" className="login-register-header">Login</h1>
                    <br />               
                    <br />               
                    <div className="form-group text-left">
                        <label>Email address</label>
                        <input type="email" 
                            className="form-control" 
                            id="email"
                            placeholder="Enter your email" 
                            onChange={e => this.password = e.target.value}
                        />
                    </div>

                    <div className="form-group text-left">
                        <label>Password</label>
                        <input type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="Password"
                            onChange={e => this.password = e.target.value}
                        />
                    </div>

                    <div className="form-check">
                        <input type='submit' 
                        value='Login' 
                        className="btn btn-primary"
                        onClick={() => this.redirectToLoginLogin()} />
                    </div>

                    <a href="/forgot" className="forgot-password">Forgot Password?</a>
                </form>

                <div className="registerMessage">
                    <span>Dont have an account? </span>
                    <span className="loginText" onClick={() => this.redirectToRegister()}>Register</span> 
                </div>
            </div>
        )
    }
}

export default withRouter(LoginForm);
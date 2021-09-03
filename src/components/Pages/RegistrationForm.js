import React, { Component } from 'react';
import axios from 'axios';
import '../../Styles/RegistrationForm.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { withRouter } from "react-router-dom";

class RegistrationForm extends Component {

    state = {
        value: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            firstName: this.firstName,
            lastName: this.lastName,
            middleName: this.middleName,
            address: this.address,
            phone: this.phone,
            email:this.email,
            password:this.password
        };

        axios.post('/user/sign-up', data).then(
            res => {
                this.setState({
                    message: res.data.message
                })
            }
        ).catch(
            err => {
                this.setState({
                    message: err.response.data.message
                })
            }
        )
    };

    redirectToHome = () => {
        this.props.history.push('/home');
    }
    redirectToLogin = () => {
        this.props.history.push('/login'); 
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
            <form onSubmit={this.handleSubmit} className="card col-12 col-lg-4 login-card mt-2 hv-center">
                <div>
                    {error}
                    <br/>
                    <br/>
                    <h3 className="login-register-header">Register</h3>
                    <br/>
                    <br/>
                    <div className="form-group text-left">                
                        <label>First name</label>
                        <input type="text" 
                            className="form-control" 
                            id="firstname"  
                            placeholder="First name"
                            onChange={e => this.firstName = e.target.value}
                        />
                    </div>

                    <div className="form-group text-left">
                        <label>Last name</label>
                        <input type="text" 
                            className="form-control" 
                            id="lastname"  
                            placeholder="Last name" 
                            onChange={e => this.lastName = e.target.value}
                        />
                    </div>

                    <div className="form-group text-left">
                        <label>Middle name</label>
                        <input type="text" 
                            className="form-control" 
                            id="middlename"  
                            placeholder="Middle name" 
                            onChange={e => this.middleName = e.target.value}
                        />
                    </div>

                    <div className="form-group text-left">
                        <label>Residential address</label>
                        <input type="text" 
                            className="form-control" 
                            id="address"  
                            placeholder="Residential address" 
                            onChange={e => this.address = e.target.value}
                        />
                    </div>

                    <div className="form-group text-left">
                        <label>Phone number</label>
                        <PhoneInput type="tel" 
                            className="form-control" 
                            id="phonenumber"  
                            international
                            defaultCountry="NG"
                            countryCallingCodeEditable={false}
                            placeholder="Enter phone number" 
                            value={this.state.value}
                            onChange={value => this.setState({value})}
                        />
                    </div>

                    <div className="form-group text-left">
                        <label>Email address</label>
                        <input type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Enter your email" 
                            onChange={e => this.email = e.target.value}
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

                    <div className="form-group text-left">
                        <label>Confirm Password</label>
                        <input type="password" 
                            className="form-control" 
                            id="confirmPassword" 
                            placeholder="Confirm Password"
                            onChange={e => this.confirmPassword = e.target.value} 
                        />
                    </div>
                    <div className="form-group">
                        <input type='submit' 
                        value='Register' 
                        className="btn btn-primary" 
                        />
                    </div>
                </div>

                <div className="existed">
                    <span>Already have an account? </span>
                    <span className="loginText" onClick={() => this.redirectToLogin()}>Login here</span> 
                </div>           
            </form>
        )
    }
}

export default withRouter(RegistrationForm);
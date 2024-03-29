import React, { Component } from 'react';

class Register extends Component  {

    constructor(props){
        super(props);
        this.state = {
            name:'',
            email:'',
            password:''
        }
    }

    onRegisterName = (event) =>{
        this.setState({name:event.target.value});
    }

    onRegisterEmail= (event) =>{
        this.setState({email:event.target.value});
    }

    onRegisterPassword = (event) =>{
        this.setState({password:event.target.value});
    }

    onRegister = () =>{
        fetch('http://localhost:3000/register', {
            method:'post',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                email:this.state.email,
                name:this.state.name,
                password:this.state.password
            })
        })
        .then(response => response.json())
        .then(user =>{
            if(user.id){
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
    }


    render() {
    return (
        <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center tc">
            <main className="pa4 black-80">
                <div className="measure ">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="name" 
                            id="name" 
                            onChange={this.onRegisterName}
                            />
                        </div>
                        <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address" 
                            id="email-address" 
                            required="email"
                            onChange={this.onRegisterEmail}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password" 
                            id="password" 
                            onChange={this.onRegisterPassword}
                            />
                        </div>
                    </fieldset>
                    <div className="">
                        <input
                            onClick={this.onRegister}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Register" />
                    </div>

                </div>
            </main>
        </article>

    );
    }
}

export default Register;
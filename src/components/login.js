import React, { Component } from 'react'
import "./login.css";
import { BrowserRouter , Switch , Route, Redirect } from 'react-router-dom';
import swal from 'sweetalert';
import {Helmet} from 'react-helmet'

class login extends Component {
    
    constructor(props) {
        super(props)

        
    
        this.state = {
            users:[
                    {email:'Khaled@gmail.com' , username:'khaled10' ,password:'12345678', bookings:[]}],
            //users:JSON.parse(localStorage.getItem('users')),
            username:'',
            email: '',
            password: '',
            Greeting:'Please Sign Up',
            loggedInUser:JSON.parse(sessionStorage.getItem('loggedInUser')),

             
        }

        
    }



    toggleSignup(){
        document.getElementById("login-toggle").style.backgroundColor="#fff";
         document.getElementById("login-toggle").style.color="#222";
         document.getElementById("signup-toggle").style.backgroundColor="#9BD4EC";
         document.getElementById("signup-toggle").style.color="#fff";
         document.getElementById("login-form").style.display="none";
         document.getElementById("signup-form").style.display="block";
     }

     toggleLogin(){
        document.getElementById("login-toggle").style.backgroundColor="#9BD4EC";
        document.getElementById("login-toggle").style.color="#fff";
        document.getElementById("signup-toggle").style.backgroundColor="#fff";
        document.getElementById("signup-toggle").style.color="#222";
        document.getElementById("signup-form").style.display="none";
        document.getElementById("login-form").style.display="block";
    }
    

    emailHandler =(e) =>{
        // console.log(e.target.value)
        this.setState({
            email:e.target.value,
        })
    }

    usernameHandler =(e) =>{
        this.setState({
            username:e.target.value,
        })
    }
    passwordHandler =(e) =>{
        this.setState({
            password:e.target.value,
        })
    }
    

    signup =(e) =>{
        e.preventDefault();
        let email =this.state.email;
        let username =this.state.username;
        let password = this.state.password;
        let users = this.state.users;
        users.push({email: email , username: username ,password: password, bookings:[]});
        this.setState({
            users,
        })
        localStorage.setItem('users' , JSON.stringify(users));
        // this.testUser();
        swal({
            title: "Booked Succesfully!",
            text: "You just added a new course!",
            icon: "success",
            button: "Aww yes!",
          });
    }
    

    login =(e) => {
        e.preventDefault();
        const users = this.state.users;
        this.testUser();
        
    }

    testUser(){
        
        const users = JSON.parse(localStorage.getItem('users'));
        users.filter((user) => {

            if( user.email == this.state.email && user.password == this.state.password){
                
                sessionStorage.setItem('loggedInUser' , JSON.stringify(user));
                this.props.history.push("/cards");
               
               swal({
                    title: `Welcome Back ${user.username}`,
                    // text: "You just added a new course!",
                    icon: "success",
                    button: "Aww yes!",
                    timer: 2000,
                  });
    
                
            }
            // else if ( user.email == this.state.email && user.password != this.state.password){
            //     swal({
            //         title: "Booked Succesfully!",
            //         text: "You just added a new course!",
            //         icon: "success",
            //         button: "Aww yes!",
            //       });
            // }

            // else if(user.email == this.state.email && user.password != this.state.password){
            //     swal({
            //         icon: 'error',
            //         title: 'Wrong Creidentials',
            //         button: "Try again!",
            //         // text: 'Something went wrong!',
            //       })
                

            // }
            else if(user.email == this.state.email && user.password != this.state.password){

            swal({
                icon: 'error',
                title: 'Wrong Creidentials',
                button: "Try again!",
                // text: 'Something went wrong!',
              })
            }
              
        })
          
    }


    // componentDidUpdate(prevState){
    //     if (this.state.loggedInUser !== prevState.loggedInUser){
    //         this.props.history.push("/cards");
    //     }
        
    // }
    
        
    

    // shouldComponentUpdate(){
    //     if(sessionStorage.getItem('loggedInUser')){
    //         return (<Redirect to="/cards" />);
    //     }
    // }



    
    
    
    
    render() {
        return (
            <>
            <Helmet>
            <title>Login / Registration</title>
        </Helmet>

            <div className="form-modal">
            <div className="form-toggle">
              <button id="login-toggle" onClick={this.toggleLogin}>log in</button>
              <button id="signup-toggle" onClick={this.toggleSignup}>sign up</button>
            </div>
            <div id="login-form">
              <form>
                <input type="text" placeholder="Enter email or username" onChange={this.emailHandler} required/>
                <input type="password" placeholder="Enter password" onChange={this.passwordHandler} required/>
                <button type="button" onClick={this.login} className="btn login">login</button>
                <p><a href="javascript:void(0)">Forgotten account</a></p>
                <hr />
                {this.state.Greeting}
                <button type="button" className="btn -box-sd-effect"> <i className="fa fa-google fa-lg" aria-hidden="true" /> sign in with google</button>
                <button type="button" className="btn -box-sd-effect"> <i className="fa fa-linkedin fa-lg" aria-hidden="true" /> sign in with linkedin</button>
                <button type="button" className="btn -box-sd-effect"> <i className="fa fa-windows fa-lg" aria-hidden="true" /> sign in with microsoft</button>
              </form>
            </div>
            <div id="signup-form">
              <form>
                <input type="email" placeholder="Enter your email" onChange={this.emailHandler} required />
                <input type="text" placeholder="Choose username" onChange={this.usernameHandler} required />
                <input type="password" placeholder="Create password" onChange={this.passwordHandler} required />
                <button type="button" onClick={this.signup} className="btn signup">create account</button>
                <p>Clicking <strong>create account</strong> means that you are agree to our <a href="javascript:void(0)">terms of services</a>.</p>
                <hr />
                {/* <button type="button" className="btn -box-sd-effect"> <i className="fa fa-google fa-lg" aria-hidden="true" /> sign up with google</button>
                <button type="button" className="btn -box-sd-effect"> <i className="fa fa-linkedin fa-lg" aria-hidden="true" /> sign up with linkedin</button>
                <button type="button" className="btn -box-sd-effect"> <i className="fa fa-windows fa-lg" aria-hidden="true" /> sign up with microsoft</button> */}
              </form>
            </div>
          </div>
          </>
        )
    }
}

export default login

import React,{Component} from 'react';
import { BrowserRouter , Switch , Route, Redirect, Link } from 'react-router-dom';
import './header.css';
import WeatherAPI from "./apis/WeatherAPI"




class Header extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
      isLoggedIn:sessionStorage.getItem('loggedInUser'),
      UserIndex:'',
       
    }
  }


  logout(){
    sessionStorage.clear();
    this.props.history.push("/login");

  }
  
  testUser(){
    let loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'))
    let users = JSON.parse(localStorage.getItem('users'))
    const getUserIndex = users.map((user , index) => {
        if(user.email == loggedInUser.email){

          // sessionStorage.setItem('UserIndex' , index)
        }    

    })

  }



render(){

  const index = this.state.UserIndex

  


  return(
    // <header className="header-fixed">
    //   <div className="header-limiter">
    //   <h1><a className="logo" href="!#">Quize<span>Jo</span></a></h1>
    //     <nav>
    //       <a href="!#">Home</a>
    //       <a href="/cards">Services</a>
    //       {this.state.isLoggedIn ?
    //       <>
    //       <a href="/profile">Profile</a>
    //       <a href="/login" onClick={this.logout}>Logout</a>
    //       </>
    //       :
    //       <> 
    //       <a href="/login">Login</a>
    //       </>}

    //     </nav>


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src="/courses/logo.png" style={{ height:'3em', marginLeft:'1em', width:'4em' }} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
    
        
        
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/youtube">YouTube</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/cards">Services</a>
        </li>
        {this.state.isLoggedIn ?
        <>
        <li className="nav-item">
          <a className="nav-link" href={`/profile/${JSON.parse(sessionStorage.getItem('loggedInUser')).username}`} onClick={this.testUser}>Profile</a>
        </li>
        {/* href={`/profile/${index}`} */}
        <li className="nav-item">
          <a className="nav-link" href="/login" onClick={this.logout}>Logout</a>
        </li>
        </>
        :
        <>
        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>


        </>}     
           <li className="nav-item">
         <WeatherAPI />
        </li>
      </ul>
    </div>
  </div>
</nav>
       
    //   </div>
    // </header>
          );
}
    }


export default Header;
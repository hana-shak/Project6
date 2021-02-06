import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import login from "./components/login";
import serviceCards from "./components/serviceCards";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/Home";
import BookingForm from "./components/BookingForm";
import profile from "./components/profile";
import YouTubeComponents from './components/YouTubeComponent';




class App extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      isLoggedIn:sessionStorage.getItem('loggedInUser'),
    }
  }
  

  render() {
    return (
      <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={login}/>
          <Route exact path="/cards" component={serviceCards}/>
          <Route exact path="/home" component={Home}/>
          {this.state.isLoggedIn ?
          <Route  path="/booking/:service" component={BookingForm}/>
            :
          <Route  path="/booking/:service" component={login}/>
          }
          <Route  path="/profile/:index" component={profile}/>
          <Route path="/youtube" component={YouTubeComponents}/>
        </Switch>          
      </BrowserRouter>
      <Footer />
      </>
    )
  }
}

// export default index



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

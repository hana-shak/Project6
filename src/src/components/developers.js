import React, { Component } from 'react'
import "./developer.css"

class Developers extends Component {
    render() {
        return (
          <>
          <link href="https://fonts.googleapis.com/css?family=Lato:300" rel="stylesheet" type="text/css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
          <div id="staff-items">
            <section id="#1" className="staff-item">
              <div className="container">
                <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png" />
                <h2 style={{fontWeight:"bold"}}>Tala Mohammad</h2>
                <div className="description">
                  <ul style={{listStyle:"none"}}>
                    {/* <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li> */}
                    <li><a href="#"><i className="fa fa-github" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </section>
            <section id="#2" className="staff-item">
              <div className="container">
                <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png" />
                <h2 style={{fontWeight:"bold"}}>Hana Khaled Shakboua</h2>
                <div className="description">
                <ul style={{listStyle:"none"}}>
                    {/* <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li> */}
                    <li><a href="#"><i className="fa fa-github" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </section>
            <section id="#3" className="staff-item">
              <div className="container">
                <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png" />
                <h2 style={{fontWeight:"bold"}}>Marina Alsahawneh</h2>
                <div className="description">
                <ul style={{listStyle:"none"}}>
                    {/* <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li> */}
                    <li><a href="#"><i className="fa fa-github" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </section>
            <section id="#4" className="staff-item">
              <div className="container">
                <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png" />
                <h2 style={{fontWeight:"bold"}}>Mohammed Alshatnawi</h2>
                <div className="description">
                <ul style={{listStyle:"none"}}>
                    {/* <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li> */}
                    {/* <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li> */}
                    <li><a href="#"><i className="fa fa-github" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </>
        

            
        )
    }
}

export default Developers

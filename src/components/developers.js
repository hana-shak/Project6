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
                <img src="https://avatars.githubusercontent.com/u/71829343?s=460&u=cc16d590f12b07706b6b7b12bc44690cab125a36&v=4" />
                <h2 style={{fontWeight:"bold"}}>Tala Mohammad</h2>
                <div className="description">
                  <ul style={{listStyle:"none"}}>
                    <li><a href="https://github.com/TalaAlWaheidi"><i className="fa fa-github" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </section>
            <section id="#2" className="staff-item">
              <div className="container">
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEBP0mrNp3lrg/profile-displayphoto-shrink_400_400/0/1562051599629?e=1617840000&v=beta&t=a_9buhrWSuFh3jt1P_965fEIMk9WwKNx1pJMTtUs0iQ" />
                <h2 style={{fontWeight:"bold"}}>Hana Khaled Shakboua</h2>
                <div className="description">
                <ul style={{listStyle:"none"}}>
                    {/* <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li> */}
                    <li><a href="https://github.com/hana-shak"><i className="fa fa-github" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </section>
            <section id="#3" className="staff-item">
              <div className="container">
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEYBMwMg_uKMQ/profile-displayphoto-shrink_400_400/0/1578593762657?e=1617840000&v=beta&t=yKrVU9NRSBZAsv7NMA-tySUWXgedCtTcuSGx0DBDgag" />
                <h2 style={{fontWeight:"bold"}}>Marina Alsahawneh</h2>
                <div className="description">
                <ul style={{listStyle:"none"}}>
                    {/* <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li> */}
                    <li><a href="https://github.com/marinaalsahawneh"><i className="fa fa-github" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </section>
            <section id="#4" className="staff-item">
              <div className="container">
                <img src="https://avatars.githubusercontent.com/u/71584457?s=460&u=80ab5bf59d67e19cc3996374e4d04879ac8ad15d&v=4" />
                <h2 style={{fontWeight:"bold"}}>Mohammed Alshatnawi</h2>
                <div className="description">
                <ul style={{listStyle:"none"}}>
                    {/* <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li> */}
                    {/* <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li> */}
                    <li><a href="https://github.com/Malshatnawi"><i className="fa fa-github" aria-hidden="true" /></a></li>
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

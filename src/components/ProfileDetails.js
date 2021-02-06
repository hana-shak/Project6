import React, { Component } from 'react'
import WeatherAPI from "./apis/WeatherAPI"

class ProfileDetails extends Component {
    render() {
        return (
            <header>
    <div className="container">
      <div className="profile">
        <div className="profile-image">
          <img src="https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png" alt />
          {/* <WeatherAPI /> */}
        </div>
        <div className="profile-user-settings">
          <h1 className="profile-user-name">{JSON.parse(sessionStorage.getItem('loggedInUser')).username}</h1>
          {/* <button className="btn profile-edit-btn">Edit Profile</button>
          <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true" /></button> */}
        </div> 
        <div className="profile-stats">
          {/* <ul>  */}
            {/* <li><span className="profile-stat-count">164</span> posts</li>
            <li><span className="profile-stat-count">188</span> followers</li>
            <li><span className="profile-stat-count">206</span> following</li> */}
            {/* <WeatherAPI /> */}
           {/* </ul>  */}
        </div>
        <div className="profile-bio">
          <p>Your E-mail is : <span className="profile-real-name">{JSON.parse(sessionStorage.getItem('loggedInUser')).email}</span></p>
        </div>
      </div>
      {/* End of profile section */}
    </div>
    {/* End of container */}
  </header>
            
        )
    }
}

export default ProfileDetails

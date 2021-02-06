import React, { Component } from 'react'
import './profile.css'
import ProfileDetails from "./ProfileDetails"
import GalleryItem from "./GalleryItem"
import WeatherAPI from "./apis/WeatherAPI"
import {Helmet} from 'react-helmet'


class profile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  

  

  
  
  
  render() {


        const userServices = JSON.parse(sessionStorage.getItem('loggedInUser')).bookings;
        const allservices = JSON.parse(localStorage.getItem('services'))
        const servicesList = userServices.map( (service , index) => {

            return (
                
                <GalleryItem img={allservices[service.bookedService].img} days={service.days} hours={service.hours} isOnline={service.isOnline}/>

            )
        })







        return (
            <>

            <Helmet>
                <title>Profile</title>
            </Helmet>

  <ProfileDetails />
  <main>
    {/* <WeatherAPI /> */}
    <div className="container">
      <div className="gallery">


        {servicesList}

      </div>

     </div>



  


  </main>
</>

        )
    }
}

export default profile

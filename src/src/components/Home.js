import React, { Component } from 'react'
import './serviceCards.css'
import Article from './article'
import Testimonial from './testimonial'
import Developers from "./Developers"
import YouTubeComponent from "./YouTubeComponent"




class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            members : [
                {name:"React", desc:"Master React With The Most Complete Course On The Market. From Beginner to Advanced", img:'courses/react.png', isBooked:"false" },
                {name:"JavaScript", desc:"Master JavaScript With The Most Complete Course On The Market. From Beginner to Advanced", img:'courses/javascript.png', isBooked:"false" },
                {name:"Bootstrap", desc:"Master Bootstrap With The Most Complete Course On The Market. From Beginner to Advanced", img:'courses/bootstrap.jpg', isBooked:"false" },
                {name:"Laravel", desc:"Master Laravel With The Most Complete Course On The Market. From Beginner to Advanced", img:'courses/laravel.jpg', isBooked:"false" },
                {name:"HTML", desc:"Master HTML With The Most Complete Course On The Market. From Beginner to Advanced", img:'courses/html.jpg', isBooked:"false" },
                {name:"CSS", desc:"Master CSS With The Most Complete Course On The Market. From Beginner to Advanced", img:'courses/css.png', isBooked:"false" }
            ]
        }
    }

  

   

    
    
    render() {

        const team = this.state.members;
        const teamMembers = team.map( (member , index) => {
            return (

                <Article name={member.name} desc={member.desc} img={member.img}/>

            )
        })

        


        return (
            <>
            
            <div className="container">
            <main className="grid">
            
            {teamMembers}
   
            </main>
            </div>
            <Testimonial />
            <h1 className="mb-0" style={{textAlign:"center" , fontWeight:"bolder"}}>Our Staff</h1>
            <Developers />
            
            
</>

        )
    }
}

export default Home

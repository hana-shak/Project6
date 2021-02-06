import React, { Component } from 'react'
import './serviceCards.css'
import Slider from "./Slider"
import "./profile.css"
import swal from 'sweetalert';
import {Helmet} from 'react-helmet'







class serviceCards extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            services : [
                {name:"React", desc:"Master React With The Best Course Ever.", img:'/courses/react.png'},
                {name:"JavaScript", desc:"Master Javascript With The Best Course Ever.", img:'/courses/javascript.png'  },
                {name:"Bootstrap", desc:"Master Bootstrap With  The Best Course Ever.", img:'/courses/bootstrap.jpg'  },
                {name:"Laravel", desc:"Master Laravel With The Best Course Ever.", img:'/courses/laravel.jpg' },
                {name:"HTML", desc:"Master HTML With The Best Course Ever.", img:'/courses/html.jpg' },
                {name:"CSS", desc:"Master CSS With The Best Course Ever.", img:'/courses/css.png'  }
            ]
        }
    }

    

    // AddtoLocal =(e) => {
    //     e.preventDefault();
    //     const services = this.state.services;
    //     localStorage.setItem('services', JSON.stringify(services))
    // }


    authCheck=(e)=>{

        if(sessionStorage.getItem('loggedInUser')){

        }
        else{
            e.preventDefault();
            swal("You must login to book a course!", "" , "warning");

        }
    }

   

    
    
    render() {


        const services = this.state.services;
        const servicesList = services.map( (service , index) => {
            return (

                <div className="gallery-item" tabIndex={0}>
                <img src={service.img} className="gallery-image" alt />
                <div className="gallery-item-info">
                  <ul>
                   
                    <li className="gallery-item-likes"><h2 style={{fontWeight:"bolder"}}>{service.name}</h2></li>
                    <br />
                    <li className="gallery-item-likes"><h5>{service.desc}</h5></li>
                    <br />
                    <li className="gallery-item-likes"><a onClick={this.authCheck} href={`booking/${index}`}><button className='btn btn-primary'>Book Now</button></a></li>
                    {/* <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /> 56</li>
                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /> 2</li> */}
                  </ul>
                    </div>
                    {/* <button onClick={this.AddtoLocal }>Add</button> */}
              </div>    


        //         <article>
        //     <img src={service.img} alt="Sample photo" />
        //     <div className="text">
        //       <h2 style={{fontWeight:'bolder'}}>{service.name}</h2>
        //       <p className="mt-5" >{service.desc}</p>
        //       <a href={`booking/${index}`}><button className="btn btn-primary m-4">Book Now</button></a>
        //       <a href="https://codepen.io/collection/XdWJOQ/"><button onClick={this.AddtoLocal} className="btn btn-primary m-4">Take Quiz</button></a>
        //     </div>
        //   </article>

            )
        })

        


        return (
            <>

            <Helmet>
                <title>Service</title>
            </Helmet>

            {/* <Slider /> */}
            {/* <div className="container">
            
            <main className="grid"> */}
            <main>
            <div className="container" style={{ paddingTop:'5%' }}>
            <div className="gallery">
      
                {servicesList}
            </div>
            </div>
            </main>
   
  {/* </main>
</div> */}
</>

        )
    }
}

export default serviceCards

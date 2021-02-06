import React from 'react';
import './Booking.css'
import serviceCards from './serviceCards';
import swal from 'sweetalert';






class BookingForm extends React.Component { 

    constructor(props) {
        super(props)
    
        this.state = {
             
            service_index:props.match.params.service,
            days:'',
            hours:'',
            isOnline:'',

        }
    }


    daysHandler =(e) => {  
        
        this.setState({
            days:e.target.value,
        }) 
        
    }
    

    hoursHandler =(e) => {  
        
        this.setState({
            hours:e.target.value,
        }) 
        

    }

    onlineHandler =(e) => {  
        
        this.setState({
            isOnline:e.target.value,
        }) 
    }


    book = (e) => {
        e.preventDefault();
        let days =this.state.days;
        let hours =this.state.hours;
        let isOnline =this.state.isOnline;
        let users = JSON.parse(localStorage.getItem('users'))
        let loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'))
        let bookedService =JSON.parse(localStorage.getItem('services'))[this.state.service_index]
        this.testUser();
        swal({
            title: "Booked Succesfully!",
            text: "You just added a new course!",
            icon: "success",
            button: "Aww yes!",
          });
        // console.log(hours)
        // console.log(days)
        // console.log(isOnline)
        // console.log(bookedService.name)

        // users.push({email: email , username: username ,password: password, bookings:[]});
        // this.setState({
        //     users,
        // })
        // localStorage.setItem('users' , JSON.stringify(users));
    }

    testUser(){
        let loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'))
        let users = JSON.parse(localStorage.getItem('users'))
        const addCourse = users.map((user , index) => {
            if(user.email == loggedInUser.email){
                const UserBookings = user.bookings
                UserBookings.push({bookedService: this.state.service_index , days:this.state.days ,hours: this.state.hours, isOnline:this.state.isOnline});
                user.bookings = UserBookings
                sessionStorage.setItem('loggedInUser' , JSON.stringify(user))

            }

            

        })

        localStorage.setItem('users' , JSON.stringify(users));
    }






    render() { 

        let services = JSON.parse(localStorage.getItem('services'))
        let service = services[this.state.service_index]

        const days=this.state.days
        
        const hours=this.state.hours
        
        const isOnline=this.state.isOnline
        // console.log(isOnline,hours,days)
    

        return (
            <div className="container"> <div className=" text-center mt-5 ">
            <h1 style={{color:"black"}}> {service.name} Your Favorite Course to Learn </h1>
            <h5 style={{color:"black"}}>Choice options that matches your time, availability and the way you like to learn. </h5>
          </div>
          <div className="row ">
            <div className="col-lg-7 mx-auto">
              <div className="card mt-2 mx-auto p-4 bg-light">
                <div className="card-body bg-light">
                                <div className="container">
                                <div className="card md-12 mb-4 text-center">
                                        <div className="card-body">
                                        <img src={service.img} style={{width:"25em", height:"25em"}} className="card-img-top" alt="..." />
                                            <h2 className="card-title mt-3" style={{fontWeight:"bold"}}> Join our {service.name} course</h2>
                                            {/* <h4 className="card-text ">Price</h4> */}
                                            <p className="card-text">{service.desc}</p>
                                    </div>
                                </div>
                                           <form id="contact-form" role="form">
                                                   <div className="controls">
                                                   <div className="row">
                                                <div className="col-md-4">
                                                       <p>Days/Week</p>
                                                    <select onChange={this.daysHandler} className="form-select form-select-sm" aria-label=".form-select-sm example">
                                                       <option >Open this select menu</option>
                                                         <option value='2'>2 days per week</option>
                                                         <option value='4'>4 days per week</option>
                                                         <option value='6'>6 days per week</option>
                                                    </select>
                                                      </div>      
                                                <div className="col-md-4">
                                                <p>Hours/Day</p>
                                                <select onChange={this.hoursHandler} className="form-select form-select-sm" aria-label=".form-select-sm example">
                                                  <option >Open this select menu</option>
                                                  <option value={'3'}>3 hours</option>
                                                  <option value={5}>5 hours</option>
                                                  <option value='7'>7 hours</option>
                                                </select>
                                                </div>
                                                <div className="col-md-4">
                                                <p>Online OR Onsite?</p>
                                                <select onChange={this.onlineHandler} className="form-select form-select-sm" aria-label=".form-select-sm example">
                                                  <option >Open this select menu</option>
                                                  <option value='Online'>Online</option>
                                                  <option value='Onsite'>Onsite</option>
                                                </select>
                                                </div>
                                                 </div>
                                         
                        <div className="row">
                             <div className="col-md-12 mt-4 text-center"> <button onClick={this.book} className="btn btn-success btn-send pt-2 btn-block ">Book Now</button> </div>

                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div> {/* /.8 */}
            </div> {/* /.row*/}
          </div>
        </div>
        )
    }
};
export default BookingForm;
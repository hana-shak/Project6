import React, { Component } from 'react'
import './testimonial.css'





export class Testimonial extends Component {

constructor(props) {
  super(props)

  this.state = {
     testimonials : [
       {name:'Ali Khaled' , role:'UX Manager', msg:'Absolutely Fantastic course. I appreciate the patience that tutors have shown in explaining such difficult concepts step by step.'},
       {name:'Khadeejah Hamdan' , role:'Lead Trainer', msg:'Absolutely Fantastic course. I appreciate the patience that tutors have shown in explaining such difficult concepts step by step.'},
       {name:'Ahmad aburumman' , role:'Trainee', msg:'Absolutely Fantastic course. I appreciate the patience that tutors have shown in explaining such difficult concepts step by step.'},
       
       
     ],

     index:1,
  }
}



    render() {
        return (
            <>
           <div className="wrapper">
           
  <div className="carousel slide" id="mySlider" data-ride="carousel" data-interval={4000} data-pause="hover">
    <ol className="carousel-indicators">
      <li onClick={()=>{
        this.setState({
          index:0
        })
      }} className="active" />
      <li onClick={()=>{
        this.setState({
          index:1
        })
      }} />
      <li onClick={()=>{
        this.setState({
          index:2
        })
      }} />
    </ol>
    <div className="carousel-inner text-white">
      <div className="carousel-item active">
        <div className="content">
          <div className="employee">
            <div className="h3 text-uppercase">{this.state.testimonials[this.state.index].name}</div>
            <div className="h6 text-mute">{this.state.testimonials[this.state.index].role}</div>
          </div>
          <div className="testimonial bg-white text-dark"> <span className="fas fa-quote-left" />
            <div className="text-justify">{this.state.testimonials[this.state.index].msg}</div> <span className="fas fa-quote-right" />
          </div>
        </div>
      </div>
      
      {/* <div className="carousel-item">
        <div className="content">
          <div className="employee">
            <div className="h3 text-uppercase">Jack Anderson</div>
            <div className="h6 text-mute">Director</div>
          </div>
          <div className="testimonial bg-white text-dark"> <span className="fas fa-quote-left" />
            <div className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem error iusto aliquid laboriosam voluptas enim sint expedita architecto in voluptates!</div> <span className="fas fa-quote-right" />
          </div>
        </div>
      </div> */}
      {/* <div className="carousel-item">
        <div className="content">
          <div className="employee">
            <div className="h3 text-uppercase">William Wendy</div>
            <div className="h6 text-mute">Supervisor</div>
          </div>
          <div className="testimonial bg-white text-dark"> <span className="fas fa-quote-left" />
            <div className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem error iusto aliquid laboriosam voluptas enim sint expedita architecto in voluptates!</div> <span className="fas fa-quote-right" />
          </div>
        </div>
      </div> */}
    </div>
  </div>
</div>


  </>
            
        )
    }
}

export default Testimonial

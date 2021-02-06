import React, {Component} from 'react';

class Slider extends Component{
    render() { 
      return (

        // <iframe width={'100%'} height={650} src="https://www.youtube.com/embed/Y0-qdp-XBJg" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        
          <div className="container-fluid mb-5 mt-5">
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="courses/slider-3.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="courses/slider-2.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="courses/slider-7.png" className="d-block w-100" alt="..." />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </a>
          </div>
          </div>
        )
    }
 };
export default Slider;
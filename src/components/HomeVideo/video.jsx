import Arabella from "./coding.mp4";
import React from "react";
import './style.css';
import Homearticle from '../Homearticle'
import { computeHeadingLevel } from "@testing-library/react";

const Video = () => {
    return (
        <div className="homecon">
            {/* Start header*/}
            <div className="headvideo hero-video">
                <video autoPlay loop muted>
                    <source src={Arabella} type="video/mp4"/>
                </video>
                <div className='text-hero-vid'>
                    {/* <Homearticle /> */}
                  {/*   <h1>SET FORTH ON <br/> A GREAT JOURNEY</h1> */}
                    {/*<p> slug  </p>*/}
                    {/* <button className="btn-hover color-2">BUTTON</button> */}
                </div>
            </div>
        </div>

    );
};

export default Video;
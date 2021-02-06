import React, { Component } from 'react'

class Article extends Component {
    render() {
        return (
            <article>
            <img src={this.props.img} alt="Sample photo" />
            <div className="text">
              <h2 style={{fontWeight:'bolder'}}>{this.props.name}</h2>
              <p className="mt-5" >{this.props.desc}</p>
              <a href="https://codepen.io/collection/XdWJOQ/"><button className="btn btn-primary m-4">Book Now</button></a>
              <a href="https://codepen.io/collection/XdWJOQ/"><button className="btn btn-primary m-4">Take Quiz</button></a>
            </div>
          </article>
        )
    }
}

export default Article

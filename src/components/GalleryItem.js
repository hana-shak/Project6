import React, { Component } from 'react'


export class GalleryItem extends Component {
    render() {
        return (
            <div className="gallery-item" tabIndex={0}>
          <img src={this.props.img} className="gallery-image" alt />
          <div className="gallery-item-info">
            <ul>
              <li className="gallery-item-likes"><span className="visually-hidden"></span><i class="far fa-calendar-alt"></i> {this.props.days} days per week</li>
              <li className="gallery-item-likes"><span className="visually-hidden"></span><i class="fas fa-hourglass-end"></i> {this.props.hours} hours per day</li>
              <li className="gallery-item-likes"><span className="visually-hidden"></span><i class="fas fa-laptop-code"></i> {this.props.isOnline}</li>
              {/* <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true" /> 56</li>
              <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true" /> 2</li> */}
            </ul>
          </div>
        </div>
        )
    }
}

export default GalleryItem

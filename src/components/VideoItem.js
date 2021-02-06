import React from 'react';
import './video.css';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div>
            <div onClick={() => handleVideoSelect(video)} className=' video-ite'>
                <div className="image-video">
            <img className='ui-image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            </div>
                    <div className='content'>
                <div className='header '>{video.snippet.title}</div>
            </div>
            </div>
            </div>
    )
};
export default VideoItem;
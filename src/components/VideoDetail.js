import React from "react";
import './video.css' 

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div className="video-text">
       <h4  style={{fontWeight:'bold'}}>Enter search keyword to load...</h4>
       
       <p className="para" style={{fontSize:'25px'}}  style={{alignContent:'center'}}>
       Use the API to search for videos matching specific search terms, topics, locations, publication dates, and much more. The APIs search.list method also supports searches for playlists and channels.

       With the YouTube Data API, you can add a variety of YouTube features to your application. Use the API to upload videos, manage playlists and subscriptions, update channel settings, and more.        

       </p>
       <img src="https://9to5google.com/wp-content/uploads/sites/4/2017/08/youtube_logo_dark.jpg?quality=82&strip=all" />
    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div >
        <iframe src={videoSrc} allowFullScreen title="Video player" className="iframe-style" />
      </div>
      <div >
        <h4 >{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
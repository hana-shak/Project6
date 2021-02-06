import React from 'react';
import SearchBar from './Searchbar';
import youtube from './apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import {Helmet} from 'react-helmet';

class YouTubeComponents extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        this.setState({
            videos: response.data.items
        })
        console.log("this is resp",response);
    };
    handleVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
       
        
    }

    render() {
        return (
            <>
            <Helmet>
                <title>YouTube</title>
            </Helmet>

            <div className='ui-container' style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui-grid'>
                    <div className="ui-row">
                        <div className="eleven-wide-column" id="testvisability">
                            <VideoDetail video={this.state.selectedVideo}  className/>
                        </div>
                        <div className="five-wide-column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default YouTubeComponents;




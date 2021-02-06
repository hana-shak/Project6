import React from 'react';

class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <div>
                <div className="d-flex justify-content-around  flex-wrap">
                    <h2 style={{ textAlign: "center" }}><img style={{ width: '4em', height: '1.5em' }} src='https://www.thatitguy.net/wp-content/uploads/2018/08/1280px-Logo_of_YouTube_2015-2017.svg.png' alt="youtube logo"></img></h2>
                    <div>
                        <form onSubmit={this.handleSubmit} >
                            <div className='search-bar ui segment'>
                                {/* <label >Video Search</label> */}
                                <input onChange={this.handleChange} name='video-search' type="text" placeholder="Search.." className='form-control form-control-lg' />
                            </div>
                        </form>
                    </div>
                </div>
                <div style={{ height: '100 %' }}>
                </div>
            </div>
        );
    }
    // className='search-bar ui segment' className='field'
}
export default Searchbar;
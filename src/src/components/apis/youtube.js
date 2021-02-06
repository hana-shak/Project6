import axios from 'axios';
const KEY = 'AIzaSyB7jWQTDh9390Tvm4D0-qvuzSyl3rp6ux0'; // mention your youtube API key here

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
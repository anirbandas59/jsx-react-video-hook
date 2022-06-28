import axios from 'axios';

const KEY = 'AIzaSyBt20TRMegkP93CQ0wFC2o0i2J_761T51I';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});

import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID SKcUu9Ch5MBKVLMPe3bFIUEQc-nGe-CUly3JKn5UvIM'
  }
})
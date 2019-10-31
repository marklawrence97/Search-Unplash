import axios from 'axios'

export default  axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 660c115674cac5ca2c57e24dbf9faa52602c6fb53810a6975cc9dee6a5d5ca57'
    }
});


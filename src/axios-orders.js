import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://learn-react-75b02.firebaseio.com/'
});

export default instance;
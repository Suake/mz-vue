import axios from 'axios';

const http = axios.create();

http.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://132.232.204.232:3000' : 'http://localhost:3000';
http.defaults.timeout = 10000;

export default http;

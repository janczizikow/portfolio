import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://janczizikow-portfolio-api.herokuapp.com/api/v1/'
    : 'http://localhost:3000/api/v1';

const api = axios.create({ baseURL });
api.defaults.headers.common['Content-Type'] = 'application/json';

export default api;

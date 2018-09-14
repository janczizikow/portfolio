import axios from 'axios'
const Cookie = process.browser ? require('js-cookie') : undefined;

const baseURL = process.env.NODE_ENV === 'production'
                ? 'https://janczizikow-portfolio-api.herokuapp.com/api/v1/'
                : 'http://localhost:3001/api/v1'

const api = axios.create({baseURL});

api.defaults.headers.common['Content-Type'] = 'application/json'
let token = null

try {
  token = Cookie.get('auth');
} catch (error) {
  // No valid cookie found
}

if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api;
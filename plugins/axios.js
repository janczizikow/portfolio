import axios from 'axios'
const Cookie = process.browser ? require('js-cookie') : undefined;

const api = axios.create({
  baseURL: 'https://janczizikow-portfolio-api.herokuapp.com/api/v1/',
});

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
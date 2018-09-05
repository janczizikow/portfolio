import api from '~/plugins/axios';
// const Cookie = process.browser ? require('js-cookie') : undefined;

export const state = () => ({
  token: null,
});

export const getters = {
  isAuth: state => state.token
};

export const mutations = {
  setAuth(state, payload) {
    state.token = payload;
  },
};

export const actions = {
  logIn(context, payload) {
    return api.post('/auth/login', {...payload})
      .then(res => {
        const token = res.headers.authorization;
        context.commit('setAuth', token);
        // Cookie.set('token', token, { expires: 1 });
      });
  },
  logOut(context) {
    const params = {...context.state.auth};
    return api.delete('/auth/logout', {params})
      .then(res => {
        console.log(res);
      })
      .then(() => {
        context.commit('setAuth', null)
        // Cookie.remove('token');
      });
  },
  loadSubmissions(context) {
    return api.get('/submissions', {
      headers: {
        'Authorization': context.state.token
      }
    })
      .then(res => {
        return res
      })
  },
}
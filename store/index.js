import api from '~/plugins/axios';
const Cookie = process.browser ? require('js-cookie') : undefined;
const cookieparser = process.server ? require('cookieparser') : undefined;

export const state = () => ({
  isMobileMenuOpen: false,
  isModalOpen: false,
  auth: null,
});

export const getters = {
  isMobileMenuOpen: state => state.isMobileMenuOpen,
  isModalOpen: state => state.isModalOpen,
  isAuth: state => state.auth
};

export const mutations = {
  toggleMobileMenu(state) {
    state.isMobileMenuOpen = !state.isMobileMenuOpen;
  },
  toggleModal(state) {
    state.isModalOpen = !state.isModalOpen;
  },
  setAuth(state, payload) {
    state.auth = payload;
  },
};

export const actions = {
  toggleMobileMenu(context) {
    context.commit('toggleMobileMenu');
  },
  toggleModal(context) {
    context.commit('toggleModal');
  },
  nuxtServerInit({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parsed.auth)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setAuth', auth)
  },
  logIn(context, payload) {
    return api.post('/auth/sign_in', {...payload})
      .then(res => {
        context.commit('setAuth', res.headers);
        Cookie.set('auth', res.headers, { expires: 14 });
      });
  },
  logOut(context) {
    const params = {...context.state.auth};
    return api.delete('/auth/sign_out', {params})
      .then(res => {
        console.log(res);
      })
      .then(() => {
        context.commit('setAuth', null)
        Cookie.remove('auth');
      });
  },
  loadSubmissions(context) {
    const params = {...context.state.auth};
    return api.get('/submissions', {params})
      .then(res => {
        console.log(res);
      })
  }
};
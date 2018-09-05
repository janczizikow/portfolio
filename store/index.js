// const cookieparser = process.server ? require('cookieparser') : undefined;

export const state = () => ({
  isMobileMenuOpen: false,
  isModalOpen: false,
});

export const getters = {
  isMobileMenuOpen: state => state.isMobileMenuOpen,
  isModalOpen: state => state.isModalOpen,
};

export const mutations = {
  toggleMobileMenu(state) {
    state.isMobileMenuOpen = !state.isMobileMenuOpen;
  },
  toggleModal(state) {
    state.isModalOpen = !state.isModalOpen;
  }
};

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    // FIXME: serverless
    // let token = null;
    // if (req.headers.cookie) {
    //   const parsed = cookieparser.parse(req.headers.cookie);
    //   try {
    //     token = parsed.token;
    //     // token = JSON.parse(parsed.token);
    //   } catch (err) {
    //     // No valid cookie found
    //   }
    // }
    // commit('auth/setAuth', token);
  },
  toggleMobileMenu(context) {
    context.commit('toggleMobileMenu');
  },
  toggleModal(context) {
    context.commit('toggleModal');
  }
};
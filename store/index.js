export const state = () => ({
  isMobileMenuOpen: false,
});

export const getters = {
  isMobileMenuOpen: state => state.isMobileMenuOpen,
};

export const mutations = {
  toggleMobileMenu(state) {
    state.isMobileMenuOpen = !state.isMobileMenuOpen;
  }
};

export const actions = {
  toggleMobileMenu(context) {
    context.commit('toggleMobileMenu');
  }
};
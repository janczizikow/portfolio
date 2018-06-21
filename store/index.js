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
  toggleMobileMenu(context) {
    context.commit('toggleMobileMenu');
  },
  toggleModal(context) {
    context.commit('toggleModal');
  }
};
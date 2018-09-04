export default ({store, redirect}) => {
  if (store.state.auth.token) {
    return redirect('/dashboard');
  }
}
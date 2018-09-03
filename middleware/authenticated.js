export default ({store, redirect}) => {
  if (!store.state.auth) {
    return redirect('/login')
  }
}
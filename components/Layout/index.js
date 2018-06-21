import Container from './components/Container.vue';
import Row from './components/Row.vue';
import Column from './components/Col.vue';

// function plugin (Vue) {
//   Vue.component('container', Container)
//   Vue.component('row', Row)
//   Vue.component('column', Column)
// }

// if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.use(plugin)
// }

export {
  Container,
  Row,
  Column
}
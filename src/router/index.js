import Vue from 'vue';
import Router from 'vue-router';
import Circles from 'components/Circles';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Circles',
      component: Circles,
    },
  ],
});

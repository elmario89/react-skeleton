import Home from '../containers/home';
import Login from '../containers/login';
import Main from '../containers/main';

export default [
  {
      path: "/",
      component: Home,
      exact: true,
  },
  {
      path: "/login",
      component: Login,
      exact: true,
  },
  {
      path: "/main",
      component: Main,
      exact: true,
  }
];
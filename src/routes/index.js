import Home from '../containers/home';
import Login from '../containers/login';
import Main from '../containers/main';
import { open } from '../store/modal/actions';

export const routes = [
  {
    path: "/",
    component: Home,
    loadData: () => {}
  }, { 
    path: "/login",
    component: Login,
    loadData: () => {}
  }, { 
    path: "/main",
    component: Main,
    loadData: () => {}
  } 
];

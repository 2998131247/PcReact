import Loadable from 'react-loadable';
import {MyLoadingComponent } from '../components'
const test1 = Loadable({
    loader: () => import('./test1'),
    loading: MyLoadingComponent
});
const test2= Loadable({
    loader: () => import('./test2'),
    loading: MyLoadingComponent
});

export default [
    { path: '/', component: test1, exact: true },
    { path: '/test2', component: test2 }
  ]


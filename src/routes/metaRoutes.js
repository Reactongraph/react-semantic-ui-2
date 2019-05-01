import Home from '../components/home'
import Peoples from '../components/peoples';

export const ALLROUTES = [
    { name: 'Home', component: Home, path: '/', exact: true},
    { name: 'Peoples', component: Peoples, path: '/peoples',  exact: true }
]
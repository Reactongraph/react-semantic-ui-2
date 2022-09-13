import Home from '../components/home'
import Peoples from '../components/peoples';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export const ALLROUTES = [
    { name: 'Home', component: Home, path: '/', exact: true},
    { name: 'Peoples', component: Peoples, path: '/peoples',  exact: true },
]
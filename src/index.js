import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';
import Layout from './common/layout'
import ProjectRouter from './routes/routes'

ReactDOM.render(<Layout>
    <ProjectRouter />
</Layout>, document.getElementById('root'));

serviceWorker.unregister();

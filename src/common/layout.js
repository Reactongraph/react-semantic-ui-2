import React from 'react';
import HBFWrapper from '../hbfWrapper'
import { BrowserRouter as Router} from 'react-router-dom';

const Layout = (props) => (
	<Router>
		<HBFWrapper children={props.children} {...props} />
	</Router>
)

export default Layout
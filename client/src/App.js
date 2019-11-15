import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import Login from './components/Login';
import './styles.scss';

function App() {
	return (
		<Router>
			<div className='App'>
				<div>
					<Route exact path='/' component={Login} />
					{/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
					<Link to='/private'>Private Page</Link>
					<Link to='/' onClick={() => localStorage.removeItem('token')}>
						Logout
					</Link>
				</div>
				<Switch>
					<PrivateRoute exact path='/private' component={BubblePage} />

					{/* <Route path='/' component={Login} /> */}
					{/* <Route component={Login} /> */}
				</Switch>
			</div>
		</Router>
	);
}

export default App;

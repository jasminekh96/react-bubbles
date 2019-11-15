import React, { useState } from 'react';
import { axiosWithAuth } from './utils/AxiosWithAuth';

function Login(props) {
	const [ data, setData ] = useState({
		username : '',
		password : '',
	});
	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post('/api/login', data)
			.then((res) => {
				localStorage.setItem('token', res.data.payload);
				props.history.push('/private');
			})
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<h1>Welcome to the Bubble App!</h1>
			<form onSubmit={handleSubmit}>
				<input type='text' name='username' value={data.username} onChange={handleChange} placeholder='Username' />
				<input type='password' name='password' value={data.password} onChange={handleChange} placeholder='Password' />
				<button>Submit</button>
			</form>
		</div>
	);
}

// const Login = () => {
//   // make a post request to retrieve a token from the api
//   // when you have handled the token, navigate to the BubblePage route
//   return (
//     <>
//       <h1>Welcome to the Bubble App!</h1>
//       <p>Build a login page here</p>
//     </>
//   );
// };

export default Login;

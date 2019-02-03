import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import '../sass/layout.scss';

const app = document.getElementById('app');

ReactDOM.render((
	<div>
		<App />
	</div>
), app);

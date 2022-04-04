import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

ReactDOM.render(
	<App endDate={new Date(2022, 11, 25, 8)} />,
	document.getElementById('root')
);

import React from 'react'
import ReactDOM from 'react-dom/client'

import Home from './components/screens/Home'

import Router from './routes/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>
)

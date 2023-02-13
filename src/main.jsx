import React from 'react'
import ReactDOM from 'react-dom/client'

import { AuthProvider } from './providers/AuthProvider.jsx'
import Router from './routes/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<React.StrictMode>
			<Router />
		</React.StrictMode>
	</AuthProvider>
)

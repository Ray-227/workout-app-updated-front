import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { AuthProvider } from './providers/AuthProvider.jsx'
import Router from './routes/Router.jsx'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<Router />
			</QueryClientProvider>
		</React.StrictMode>
	</AuthProvider>
)

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

import NotFound404 from '../components/screens/NotFound404'

import { routes } from './routes.data'

const Router = () => {
	const { isAuth } = useAuth()

	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					// if (route.isAuth && !isAuth) {
					// 	return false
					// }

					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.element />}
						/>
					)
				})}
				<Route path='*' element={<NotFound404 />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router

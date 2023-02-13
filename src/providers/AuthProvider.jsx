import Cookies from 'js-cookie'
import { createContext, useState } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(!!Cookies.get('red'))

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			{children}
		</AuthContext.Provider>
	)
}

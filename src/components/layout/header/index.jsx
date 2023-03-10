import { IoMdArrowBack } from 'react-icons/io'
import { SlUser } from 'react-icons/sl'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth.js'

import Hamburger from '../hamburger/index.jsx'

import styles from './Header.module.scss'

const Header = ({ backLink = '/', color = '#fff' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<div className={styles.header}>
			{(isAuth || pathname !== '/auth') &&
				(pathname !== '/' || !isAuth ? (
					<button onClick={() => navigate(isAuth ? backLink : '/auth')}>
						<IoMdArrowBack fill={color} fontSize={30} />
					</button>
				) : (
					<button onClick={() => navigate('/profile')}>
						<SlUser fill={color} fontSize={30} />
					</button>
				))}
			{isAuth && <Hamburger color={color} />}
		</div>
	)
}

export default Header

import { IoMdArrowBack } from 'react-icons/io'
import { SlUser } from 'react-icons/sl'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth.js'

import Hamburger from '../hamburger/index.jsx'

import styles from './Header.module.scss'

const Header = ({ backLink = '/' }) => {
	const { isAuth } = useAuth()

	const { pathname } = useLocation()
	const navigate = useNavigate()

	return (
		<div className={styles.header}>
			{pathname !== '/' ? (
				<button onClick={() => navigate(backLink)}>
					<IoMdArrowBack fill='#fff' fontSize={30} />
				</button>
			) : (
				<button onClick={() => navigate(isAuth ? '/profile' : '/auth')}>
					<SlUser fill='#fff' fontSize={30} />
				</button>
			)}
			<Hamburger />
		</div>
	)
}

export default Header

import { IoMdArrowBack } from 'react-icons/io'

import { useAuth } from '../../../hooks/useAuth.js'
import Hamburger from '../hamburger/index.jsx'

import styles from './Header.module.scss'

const Header = ({ backLink }) => {
	const { isAuth } = useAuth()

	return (
		<div className={styles.header}>
			<button onClick={() => {}}>
				<IoMdArrowBack fill='#fff' fontSize={30} />
			</button>
			<Hamburger />
		</div>
	)
}

export default Header

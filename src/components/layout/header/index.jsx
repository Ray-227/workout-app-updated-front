import { FiArrowLeft } from 'react-icons/fi'

import { useAuth } from '../../../hooks/useAuth.js'
import Hamburger from '../hamburger/index.jsx'

import styles from './Header.module.scss'

const Header = ({ backLink }) => {
	const { isAuth } = useAuth()

	return (
		<div className={styles.header}>
			<button onClick={() => {}}>
				<FiArrowLeft color={'white'} />
			</button>
			<Hamburger />
		</div>
	)
}

export default Header

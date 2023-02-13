import cn from 'clsx'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth.js'

import { TOKEN } from '../../../app.constants.js'

import styles from './Hamburger.module.scss'
import { menu } from './menu.data'

const Menu = ({ isShow, setIsShow }) => {
	const { isAuth, setIsAuth } = useAuth()
	const logoutHandler = () => {
		if (!isAuth) return

		Cookies.remove(TOKEN)
		setIsAuth(false)
		setIsShow(false)
	}

	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isShow
			})}
		>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					<button onClick={logoutHandler}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu

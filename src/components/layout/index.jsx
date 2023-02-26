import cn from 'clsx'

import { useCheckToken } from '../../hooks/useCheckToken.js'

import styles from './Layout.module.scss'
import Header from './header/index.jsx'

const Layout = ({ children, bgImage, heading = '', backLink = '/', colorHeaderIcon = '#fff' }) => {
	useCheckToken()

	return (
		<section
			className={cn(styles.wrapper, {
				[styles.otherPage]: !!heading
			})}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<Header backLink={backLink} color={colorHeaderIcon} />
			{heading && <h1 className={styles.heading}>{heading}</h1>}
			{children && <div>{children}</div>}
		</section>
	)
}

export default Layout

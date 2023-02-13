import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth.js'

import '../../../assets/styles/index.scss'
import Layout from '../../layout'
import Button from '../../ui/Button/index.jsx'

import styles from './Home.module.scss'

function Home() {
	const { isAuth } = useAuth()
	const navigate = useNavigate()

	return (
		<Layout bgImage={'/images/home-bg.jpg'}>
			<Button clickHandler={() => navigate(isAuth ? '/new-workout' : '/auth')}>
				{isAuth ? 'New' : 'Sign in'}
			</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
		</Layout>
	)
}

export default Home

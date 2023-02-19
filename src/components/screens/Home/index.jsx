import { useNavigate } from 'react-router-dom'

import Button from '../../ui/Button/index.jsx'

import '../../../assets/styles/index.scss'
import Layout from '../../layout'
import Statistics from '../Profile/Statistics/index.jsx'

import styles from './Home.module.scss'

function Home() {
	const navigate = useNavigate()

	return (
		<Layout bgImage={'/images/home-bg.jpeg'}>
			<Button clickHandler={() => navigate('/new-workout')}>{'New'}</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			<Statistics />
		</Layout>
	)
}

export default Home

import cn from 'clsx'
import { useNavigate } from 'react-router-dom'

import Button from '../../ui/Button/index.jsx'
import Loader from '../../ui/Loader/index.jsx'

import stylesLayout from '../../layout/Layout.module.scss'
import Header from '../../layout/header/index.jsx'

import styles from './Profile.module.scss'
import Statistics from './Statistics/index.jsx'
import { useProfile } from './useProfile.js'

const Profile = () => {
	const { data, isLoading } = useProfile()
	const navigate = useNavigate()

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{ backgroundImage: 'url(/images/profile-bg.jpg)', height: 356 }}
			>
				<Header />

				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<img src='/images/header/user.svg' alt='Profile' height='56' draggable='false' />
							<h1 className={stylesLayout.heading}>{data?.email}</h1>
						</>
					)}
				</div>
				<Statistics />
			</div>
			<div className='wrapper-inner-page' style={{ paddingLeft: 0, paddingRight: 0 }}>
				<div className={styles.before_after}>
					{data?.images?.map((image, index) => (
						<div key={image}>
							<div className={styles.heading}>{index === 1 ? 'After' : 'Before'}</div>
							<img src={image} alt='' draggable={false} style={{ borderRadius: 14 }} />
						</div>
					))}
				</div>
			</div>
			<Button clickHandler={() => navigate('/upload')}>
				{!!data?.images.length ? 'Обновить фото' : 'Загрузить фото'}
			</Button>
		</>
	)
}

export default Profile

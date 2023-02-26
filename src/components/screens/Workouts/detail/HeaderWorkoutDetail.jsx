import cn from 'clsx'

import stylesLayout from '../../../layout/Layout.module.scss'
import Header from '../../../layout/header/'
import styles from './WorkoutDetail.module.scss'

const HeaderWorkoutDetail = ({ workoutLog, isSuccess }) => {
	return (
		<div
			className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
			style={{
				backgroundImage: `url('/images/workout-bg.jpeg')`,
				height: 356
			}}
		>
			<Header backLink='/workouts' color={'#000'} />

			{isSuccess && (
				<div>
					<time className={styles.time}>{workoutLog.minute + ' min.'}</time>
					<h1 className={stylesLayout.heading}>{workoutLog.workout.name}</h1>
				</div>
			)}
		</div>
	)
}

export default HeaderWorkoutDetail
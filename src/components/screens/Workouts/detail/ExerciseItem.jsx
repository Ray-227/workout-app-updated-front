import cn from 'clsx'
import { useNavigate } from 'react-router-dom'

import styles from './WorkoutDetail.module.scss'

const ExerciseItem = ({ exercises }) => {
	const navigation = useNavigate()

	return (
		<div
			className={cn(styles.item, {
				[styles.completed]: exercises?.isCompleted
			})}
		>
			<button
				aria-label='Move to exercise'
				onClick={() => navigation(`/exercise/${exercises.id}`)}
			>
				<span>{exercises?.name}</span>
				<img
					src={import.meta.env.VITE_SERVER_URL + exercises?.iconPath}
					height='34'
					alt='icon'
					draggable={false}
				/>
			</button>
		</div>
	)
}

export default ExerciseItem

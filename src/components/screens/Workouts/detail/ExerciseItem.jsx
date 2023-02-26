import cn from 'clsx'
import { useNavigate } from 'react-router-dom'

import styles from './WorkoutDetail.module.scss'

const ExerciseItem = ({ exercise }) => {
	const navigation = useNavigate()

	return (
		<div
			className={cn(styles.item, {
				[styles.completed]: exercise?.isCompleted
			})}
		>
			<button
				aria-label='Move to exercise'
				onClick={() => navigation(`/exercise/${exercise.exercise.id}`)}
			>
				<span>{exercise.exercise?.name}</span>
				<img
					src={import.meta.env.VITE_SERVER_URL + exercise.exercise?.iconPath}
					height='34'
					alt='icon'
					draggable={false}
				/>
			</button>
		</div>
	)
}

export default ExerciseItem

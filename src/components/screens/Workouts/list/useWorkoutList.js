import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import WorkoutLogService from '../../../../services/workout/workout-log.service'
import WorkoutService from '../../../../services/workout/workout.service'

export const useWorkoutList = () => {
	const { data, isSuccess } = useQuery(
		['get workouts'],
		() => WorkoutService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	const navigate = useNavigate()

	const {
		mutate,
		isLoading,
		isSuccess: isSuccessMutate,
		error
	} = useMutation(
		['Create new workout log'],
		workoutId => WorkoutLogService.create(workoutId),
		{
			onSuccess({ data: { workoutLog } }) {
				navigate(`/workout/${workoutLog.id}`)
			}
		}
	)

	return {
		data,
		isSuccess,
		mutate,
		isLoading,
		isSuccessMutate,
		error
	}
}

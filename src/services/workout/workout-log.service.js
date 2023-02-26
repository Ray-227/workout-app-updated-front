import { $axios } from '../../api'

const WORKOUTS_LOG = '/workouts/log'

class WorkoutLogService {
	async getByID(id) {
		return $axios.get(`${WORKOUTS_LOG}/${id}`)
	}

	async create(workoutID) {
		return $axios.post(`${WORKOUTS_LOG}/${workoutID}`)
	}

	async complete(id, body) {
		return $axios.patch(`${WORKOUTS_LOG}/complete/${id}`, body)
	}
}
export default new WorkoutLogService()

import { $axios } from '../../api'

const EXERCISES_LOG = '/exercises/log'

class ExerciseLogService {
	async getByID(id) {
		return $axios.get(`${EXERCISES_LOG}/${id}`)
	}

	async create(exerciseID) {
		return $axios.post(`${EXERCISES_LOG}/${exerciseID}`)
	}

	/*
	body
		{
			"weight": 12,
			"repeat": 121,
			"isCompleted": true
		}
	*/
	async updateTime(timeID, body) {
		return $axios.put(`${EXERCISES_LOG}/time/${timeID}`, body)
	}

	// {
	// 	"isCompleted": true
	// }
	async complete(id, body) {
		return $axios.path(`${EXERCISES_LOG}/complete/${id}`, body)
	}
}
export default new ExerciseLogService()

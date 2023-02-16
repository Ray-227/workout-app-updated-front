import { $axios } from '../../../../api.js'

class UploadService {
	async upload(data) {
		return $axios.put('/upload', data, { headers: { 'Content-Type': 'multipart/form-data' } })
	}
}

export default new UploadService()

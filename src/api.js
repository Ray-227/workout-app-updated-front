import axios from 'axios'
import Cookies from 'js-cookie'

import { API_URL, TOKEN } from './app.constants.js'

// get key the 'red' because all use key the 'token' it's not safely
export const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: !!Cookies.get(TOKEN) ? `Bearer ${Cookies.get(TOKEN)}` : ''
	}
})

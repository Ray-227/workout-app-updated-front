import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/useAuth.js'

import { TOKEN } from '../../../app.constants.js'
import AuthService from '../../../services/auth.service.js'

export const useAuthPage = () => {
	const { isAuth, setIsAuth } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (isAuth) navigate('/')
	}, [isAuth])

	const [type, setType] = useState('login')

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const { mutate, isLoading } = useMutation(
		['auth'],
		({ email, password }) => AuthService.main(email, password, type),
		{
			onSuccess: data => {
				setIsAuth(true)
				Cookies.set(TOKEN, data.token)
				reset()
			}
		}
	)

	const onSubmit = data => {
		mutate(data)
	}

	return useMemo(
		() => ({
			setType,
			register,
			handleSubmit,
			errors,
			isLoading,
			onSubmit
		}),
		[errors, isLoading]
	)
}

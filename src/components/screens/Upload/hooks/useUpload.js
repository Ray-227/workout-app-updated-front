import { useMutation } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import UploadService from '../services/upload.service.js'

export const useUpload = () => {
	const navigate = useNavigate()
	const [errorPhoto, setErrorPhoto] = useState({ isError: false })
	const { register, handleSubmit, reset } = useForm()

	const {
		mutate: upload,
		isLoading,
		error
	} = useMutation(['upload'], data => UploadService.upload(data), {
		onSuccess: () => {
			reset()
			navigate('/profile')
		},
		onError: () => {
			reset()
		}
	})

	const onSubmit = data => {
		const isPhoto = Object.values(data).filter(item => item.length === 0).length < 2

		if (!isPhoto) {
			setErrorPhoto({ isError: true, message: 'At least one photo is required' })
			throw new Error('At least one photo is required')
		} else {
			setErrorPhoto({ isError: false })
		}

		upload(data)
	}

	return useMemo(
		() => ({
			register,
			handleSubmit,
			isLoading,
			error,
			onSubmit,
			errorPhoto
		}),
		[error, errorPhoto, isLoading]
	)
}

import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import Button from '../../ui/Button/index.jsx'
import Field from '../../ui/Field/index.jsx'
import Loader from '../../ui/Loader/index.jsx'

import { useAuth } from '../../../hooks/useAuth.js'

import AuthService from '../../../services/auth.service.js'
import Layout from '../../layout/index.jsx'

import styles from './Atuh.module.scss'

const Auth = () => {
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
				Cookies.set('red', data.token)
				reset()
			}
		}
	)

	const onSubmit = data => {
		mutate(data)
	}

	return (
		<>
			<Layout heading={'Sign in'} bgImage={'/images/auth-bg.png'} />
			<div className={'wrapper-inner-page'}>
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						name={'email'}
						options={{
							required: 'Email is required'
						}}
						register={register}
						type='text'
						placeholder={'Enter email'}
					/>
					<Field
						error={errors?.password?.message}
						name={'password'}
						options={{
							required: 'Password is required'
						}}
						register={register}
						type='text'
						placeholder={'Enter password'}
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>Sign in</Button>
						<Button clickHandler={() => setType('register')}>Sign Up</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth

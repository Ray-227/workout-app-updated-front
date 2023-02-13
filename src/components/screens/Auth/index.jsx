import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Button from '../../ui/Button/index.jsx'
import Field from '../../ui/Field/index.jsx'
import Loader from '../../ui/Loader/index.jsx'

import Layout from '../../layout/index.jsx'

import styles from './Atuh.module.scss'

const Auth = () => {
	const [type, setType] = useState('auth')

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {}

	return (
		<>
			<Layout heading={'Sign in'} bgImage={'/images/auth-bg.png'} />
			<div className={'wrapper-inner-page'}>
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
						<Button clickHandler={() => setType('auth')}>Sign in</Button>
						<Button clickHandler={() => setType('reg')}>Sign Up</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth

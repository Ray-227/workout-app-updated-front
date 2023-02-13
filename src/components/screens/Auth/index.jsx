import Button from '../../ui/Button/index.jsx'
import Field from '../../ui/Field/index.jsx'
import Loader from '../../ui/Loader/index.jsx'

import Layout from '../../layout/index.jsx'

import styles from './Atuh.module.scss'
import { useAuthPage } from './useAuthPage.js'

const Auth = () => {
	const { setType, register, handleSubmit, errors, isLoading, onSubmit } = useAuthPage()

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

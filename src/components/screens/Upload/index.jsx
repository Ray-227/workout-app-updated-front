import Button from '../../ui/Button/index.jsx'
import styles from '../../ui/Field/Field.module.scss'
import Loader from '../../ui/Loader/index.jsx'

import { useUpload } from './hooks/useUpload.js'

import Layout from '../../layout/index.jsx'

const Upload = () => {
	const { register, handleSubmit, isLoading, onSubmit, error, errorPhoto } = useUpload()

	return (
		<>
			<Layout backLink={'/profile'} heading={'Upload your before and after'} bgImage={'/images/profile-bg.jpg'} />
			<div className={'wrapper-inner-page'}>
				{!!error && <div className={'error'}>{error.message}</div>}
				{errorPhoto.isError && <div className={'error'}>{errorPhoto.message}</div>}
				{isLoading ? (
					<Loader />
				) : (
					<form onSubmit={handleSubmit(onSubmit)}>
						<label htmlFor='before'>Before photo</label>
						<input {...register('before')} id='before' type='file' className={styles.input} />
						<label htmlFor='after'>After photo</label>
						<input {...register('after')} id='after' type='file' className={styles.input} />
						<Button>Загрузить</Button>
					</form>
				)}
			</div>
		</>
	)
}

export default Upload

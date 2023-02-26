import Alert from '../../ui/Alert'
import Button from '../../ui/Button'
import Field from '../../ui/Field'
import Loader from '../../ui/Loader'

import Layout from '../../Layout'

import { useNewWorkout } from './useNewWorkout.js';
import { Link } from 'react-router-dom';
import SelectExercises from './SelectExercises.jsx';

const NewWorkout = () => {
  const {
    register,
    handleSubmit,
    errors,
    control,
    isSuccess,
    error,
    isLoading,
    onSubmit
  } = useNewWorkout()

  return (
    <>
      <Layout bgImage='/images/new-workout-bg.jpg' heading='Create new workout' backLink='/' />
      <div className='wrapper-inner-page'>
        {error && <Alert type='error' text={error} />}
        {isSuccess && <Alert text='Workout created successfully' />}
        {isLoading && <Loader />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            error={errors?.name?.message}
            name='name'
            register={register}
            options={{
              required: 'Name is required'
            }}
            type='text'
            placeholder='Enter name'
          />

          <Link to={'/new-exercise'} className={'dark-link'}>Add new exercise</Link>

          <SelectExercises control={control} errors={errors} />

          <Button>Create</Button>
        </form>
      </div>
    </>
  )
}

export default NewWorkout

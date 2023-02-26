import Loader from '../../../ui/Loader'
import Alert from '../../../ui/Alert'

import Layout from '../../../layout/'
import styles from '../detail/WorkoutDetail.module.scss'

import WorkoutItem from './WorkoutItem'
import { useWorkoutList } from './useWorkoutList'

const WorkoutList = () => {
  const { data, error, isLoading, isSuccess, isSuccessMutate, mutate } =
    useWorkoutList()
  
  return (
    <>
      <Layout bgImage='/images/workout-bg.jpeg' heading='Workout list' colorHeaderIcon={'#000'}/>
      <div
        className='wrapper-inner-page'
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        {error && <Alert type='error' text={error} />}
        {isSuccessMutate && <Alert text='Workout log created' />}
        {isLoading && <Loader />}
        {isSuccess && (
          <div className={styles.wrapper}>
            {data.map(workout => (
              <WorkoutItem key={workout.id} workout={workout} mutate={mutate} />
            ))}
          </div>
        )}

        {isSuccess && data?.length === 0 && (
          <Alert type='warning' text='Workouts not found' />
        )}
      </div>
    </>
  )
}

export default WorkoutList

import { useMutation, useQuery } from '@tanstack/react-query'
import { Fragment } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Loader from '../../../ui/Loader'
import Button from '../../../ui/Button'

import WorkoutLogService from '../../../../services/workout/workout-log.service.js'

import ExerciseItem from './ExerciseItem.jsx'
import HeaderWorkout from './HeaderWorkoutDetail'
import styles from './WorkoutDetail.module.scss'

const WorkoutDetail = () => {
  const { id } = useParams()

  const {
    data: workoutLog,
    isSuccess,
    isLoading
  } = useQuery(['get workout log', id], () => WorkoutLogService.getByID(id), {
    select: ({ data }) => data
  })

  const navigate = useNavigate()

  const { mutate } = useMutation(
    ['complete workout'],
    () => WorkoutLogService.complete(id),
    {
      onSuccess() {
        navigate('/workouts')
      }
    }
  )


  return (
    <>
      <HeaderWorkout isSuccess={isSuccess} workoutLog={workoutLog} />
      <div
        className='wrapper-inner-page'
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <div style={{ width: '90%', margin: '0 auto' }}>
          {/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.wrapper}>
            {workoutLog?.workout?.exercises?.map((exercises, index) => (
              <Fragment key={exercises.id}>
                <ExerciseItem exercises={exercises} />
                {index % 2 !== 0 &&
                  index !== workoutLog.workout.exercises.length - 1 && (
                    <div className={styles.line} />
                  )}
              </Fragment>
            ))}
          </div>
        )}
        <Button clickHandler={() => mutate()}>Complete workout</Button>
      </div>
    </>
  )
}

export default WorkoutDetail

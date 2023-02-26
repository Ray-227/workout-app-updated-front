import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import WorkoutService from '../../../services/workout/workout.service.js';
import { useMemo } from 'react';


export const useNewWorkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    mode: 'onChange'
  })

  const { isSuccess, error, isLoading, mutate } = useMutation(
    ['create workout'],
    body => WorkoutService.create(body),
    {
      onSuccess: () => {
        reset({
          name: '',
          exercisesIDs: []
        })
      }
    }
  )

  const onSubmit = data => {
    mutate({
      name: data.name,
      exercisesIDs: data.exercisesIDs.map(({ value }) => value)
    })
  }

  return useMemo(() => ({
    register,
    handleSubmit,
    control,
    errors,
    isSuccess,
    error,
    isLoading,
    onSubmit
  }), [errors, isSuccess, error, isLoading])
}
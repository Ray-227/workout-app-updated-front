import { useQuery } from '@tanstack/react-query';
import ExerciseService from '../../../services/exercise/exercise.service.js';


export const useExercisesList = () => useQuery(['exercises list'], () => ExerciseService.getAll(), { select: ({ data }) => data })
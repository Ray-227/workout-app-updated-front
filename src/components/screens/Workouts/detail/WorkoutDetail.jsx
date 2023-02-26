import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import WorkoutLogService from '../../../../services/workout/workout-log.service.js'


const WorkoutDetail = () => {
  const { id } = useParams()

  const { data: workoutLog, isSuccess, isLoading } = useQuery(['get workout log', id], () => WorkoutLogService.getByID(id), {
    select: ({ data }) => data
  })

  console.log(`LOG: workout`, workoutLog)

  return (
    <div>WorkoutDetail</div>
  );
};

export default WorkoutDetail;
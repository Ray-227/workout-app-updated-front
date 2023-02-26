import { Controller } from 'react-hook-form';
import ReactSelect from 'react-select'
import { useExercisesList } from './useExercisesList.js';
import Loader from '../../ui/Loader/index.jsx';


const SelectExercises = ({ control, errors }) => {
  const {data, isLoading } = useExercisesList()

  if (isLoading) return <Loader />

  return (
    <Controller
      name='exercisesIDs'
      rules={{required: 'Select exercise is required'}}
      control={control}
      render={({ field: { value, onChange } }) => (
        <div>
          <ReactSelect
            classNamePrefix='select2-selection'
            placeholder='Exercises...'
            title='Exercises'
            options={data.map(exercise => ({
              value: exercise.id,
              label: exercise.name
            }))}
            value={value}
            onChange={onChange}
            isMulti
          />
          {errors?.exercisesIDs && <div className='error'>{errors?.exercisesIDs?.message}</div>}
        </div>
      )}
    />
  );
};

export default SelectExercises;
import Auth from '../components/screens/Auth'
import Home from '../components/screens/Home'
import NewExercise from '../components/screens/NewExercise'
import NewWorkout from '../components/screens/NewWorkout'
import Profile from '../components/screens/Profile'
import Upload from '../components/screens/Upload'
import WorkoutDetail from '../components/screens/Workouts/detail/WorkoutDetail'
import WorkoutList from '../components/screens/Workouts/list/WorkoutList'

export const routes = [
	{
		path: '/auth',
		element: Auth,
		isAuth: false
	},
	{
		path: '/',
		element: Home,
		isAuth: true
	},
	{
		path: '/new-workout',
		element: NewWorkout,
		isAuth: true
	},
	{
		path: '/profile',
		element: Profile,
		isAuth: true
	},
	{
		path: '/upload',
		element: Upload,
		isAuth: true
	},
	{
		path: '/new-exercise',
		element: NewExercise,
		isAuth: true
	},
	{
		path: '/workout/:id',
		element: WorkoutDetail,
		auth: true
	},
	{
		path: '/workouts',
		element: WorkoutList,
		isAuth: true
	},
	// {
	// 	path: '/exercise/:id',
	// 	// element: ExerciseLog,
	// 	isAuth: true
	// }
]

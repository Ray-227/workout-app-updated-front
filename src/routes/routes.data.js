import Auth from '../components/screens/Auth'
import Home from '../components/screens/Home'
import NewWorkout from '../components/screens/NewWorkout'
import Profile from '../components/screens/Profile'

// import ExerciseLog from '../components/screens/ExerciseLog'
// import NewExercise from '../components/screens/NewExercise'
// import WorkoutDetail from '../components/screens/workout/WorkoutDetail'
// import WorkoutList from '../components/screens/WorkoutList'

export const routes = [
	{
		path: '/',
		element: Home,
		isAuth: false
	},
	{
		path: '/auth',
		element: Auth,
		isAuth: false
	},
	{
		path: '/new-workout',
		element: NewWorkout,
		isAuth: true
	},
	{
		path: '/profile',
		element: Profile,
		isAuth: false
	}
	// {
	// 	path: '/new-exercise',
	// 	// element: NewExercise,
	// 	isAuth: true
	// },
	// {
	// 	path: '/workout/:id',
	// 	// element: Workout,
	// 	auth: true
	// },
	// {
	// 	path: '/workouts',
	// 	// element: ListWorkouts,
	// 	isAuth: true
	// },
	// {
	// 	path: '/exercise/:id',
	// 	// element: ExerciseLog,
	// 	isAuth: true
	// }
]

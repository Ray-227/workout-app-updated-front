import Header from './header/index.jsx'

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}

export default Layout

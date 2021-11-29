import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import components
import Navbar from './components/Navbar'

// import pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import Photography from './pages/Photography'
import Blog from './pages/Blog'

function App() {
  return (
		<div className='app'>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/projects' exact component={Projects} />
					<Route path='/photography' exact component={Photography} />
					<Route path='/blog' exact component={Blog} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;

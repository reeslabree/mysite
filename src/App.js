import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import components
import Navbar from './components/Navbar'

// import pages
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Photography from './pages/Photography'

function App() {
  return (
		<div className='app'>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/contact' exact component={Contact} />
					<Route path='/projects' exact component={Projects} />
					<Route path='/photography' exact component={Photography} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;

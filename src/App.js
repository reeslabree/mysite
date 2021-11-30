import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/projects' exact element={<Projects />} />
					<Route path='/photography' exact element={<Photography />} />
					<Route path='/blog' exact element={<Blog />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

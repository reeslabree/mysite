import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react';

// import components
import Navbar from './components/Navbar'
import ContactBar from './components/ContactBar';

// import pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'

function App() {
  return (
    <div className="App">
      <Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/blog' element={<Blog />} />
				</Routes>
			</Router>
			<ContactBar />
    </div>
  );
}

export default App;

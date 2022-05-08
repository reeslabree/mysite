import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const Navbar = () => {
	const [open, setOpen] = useState(false)
	
	const handleClick = () => {
		setOpen(!open)
	}
	
	const closeMenu = () => {
		setOpen(false)
	}
	
	return (
		<nav className='navbar'>
			<Link to='/' className='nav-logo' onClick={() => setOpen(false)}>
				reeslabree.com
			</Link>

			<div onClick={handleClick} className='nav-icon'>
			{open ? <FiX /> : <FiMenu />}
			</div>
			
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className='nav-item'>
					<Link to='/projects' className='nav-link' onClick={closeMenu}>
						Projects
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/photography' className='nav-link' onClick={closeMenu}>
						Photography
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/blog' className='nav-link' onClick={closeMenu}>
						Blog
					</Link>
				</li>
			</ul>
			
		</nav>
	)
}
export default Navbar

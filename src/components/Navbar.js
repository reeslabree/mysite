import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

import './Navbar.css'

const Navbar = () => {
	const [open, setOpen] = useState(false)
	return (
		<nav className='navbar'>
			<Link to='/' className='nav-logo' onClick={() => setOpen(false)}>
				reeslabree.com
			</Link>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className='nav-item'>
					<Link to='/' className='nav-link' onClick={() => setOpen(false)}>
						Home
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/contact' className='nav-link' onClick={() => setOpen(false)}>
						Contact
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/projects' className='nav-link' onClick={() => setOpen(false)}>
						Projects
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/photography' className='nav-link' onClick={() => setOpen(false)}>
						Photography
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/blog' className='nav-link' onClick={() => setOpen(false)}>
						Blog
					</Link>
				</li>
			</ul>
		</nav>
	)
}
export default Navbar
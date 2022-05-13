import React, { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import { AiFillCode, AiFillCamera } from 'react-icons/ai'
import { BsFillPenFill } from 'react-icons/bs'
import styles from './styles/Navbar.module.css'

const Navbar = () => {
	const [open, setOpen] = useState(false)
	return (
		<nav className='navbar'>
			<Link href='/' className={styles.nav_logo} onClick={() => setOpen(false)}>
				reeslabree.com
			</Link>
			<ul className={open ? `${styles.nav_links}.active` : styles.nav_links}>
			<li className={styles.nav_item}>
					<Link href='/projects' className={styles.nav_link} onClick={() => setOpen(false)}>
						Projects
					</Link>
				</li>
				<li className={styles.nav_item}>
					<Link href='/blog' className={styles.nav_link} onClick={() => setOpen(false)}>
						Blog
					</Link>
				</li>
			</ul>
		</nav>
	)
}
export default Navbar

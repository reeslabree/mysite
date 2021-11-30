import React from 'react'
import ContactBar from '../components/ContactBar'
import Profile from '../components/Profile'

const Home = () => {
	return (
		<div>
			<div>
				<Profile />	
			</div>
			<div style={{clear:'both'}}>
				<ContactBar />
			</div>
		</div>
	)
} 
export default Home;

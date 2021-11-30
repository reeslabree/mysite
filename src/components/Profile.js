import React from 'react'
import Typing from 'react-typing-animation'
import './Profile.css'
import Portrait from '../media/portrait.jpeg'

const Profile = () => {
	return(
		<div className='container'>
			<img src={Portrait} alt='This is a picture of me' className='portrait' />	
			<Typing className='text-typing-primary' speed={100}>
				Rees LaBree
			</Typing>	
		</div>
	)
}
export default Profile

import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { Button } from 'react-bootstrap'
import './style/ContactBar.css'

const ContactBar = () => {
	return (
		<div className='contact-div'>
			<Button className='contact-button' href='https://www.github.com/reeslabree' target='_blank'><AiFillGithub className='contact-icon' fontSize='45px' /></Button>
			<Button className='contact-button' href='https://www.linkedin.com/in/rees-labree-bb1566187/' target='_blank'><AiFillLinkedin className='contact-icon'fontSize='48px'/></Button>	
		</div>
	)
}
export default ContactBar

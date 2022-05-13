import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { Button } from 'react-bootstrap'
import styles from '../styles/components/ContactBar.module.css'

const ContactBar = () => {
	return (
		<div className={styles.contact_div}>
			<Button className={styles.contact_button} href='https://www.github.com/reeslabree' target='_blank'><AiFillGithub className={styles.contact_icon} fontSize='45px' /></Button>
			<Button className={styles.contact_button} href='https://www.linkedin.com/in/rees-labree-bb1566187/' target='_blank'><AiFillLinkedin className={styles.contact_icon}fontSize='48px'/></Button>	
		</div>
	)
}
export default ContactBar

import react from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import './Biography.css'

const Biography = () => {
	return (
		<div>
			<div className='bio-block'>
			<span className='primary-text'>
			<FaGreaterThan className='inline-icon' />About			
			</span>
			<p className='secondary-text'>
			I'm a student at CU Boulder graduating in May 2022 with a B.S. in Computer Science and a Minor in Mathematics. I spend my free time tinkering with new hobbies and projects, both within and outside the scope of computer science.  
			</p>
			</div>
			<div className='bio-block'>
				<span className='primary-text'>
					<FaGreaterThan className='inline-icon' />Hobbies
				</span>
				<p className='secondary-text'>
					<ul>
						<li>I'm an amautuer beer brewer (emphasis on amatuer)</li>
						<li>I've been rock climbing since I was in highschool. One of my favorite climbs is <a href='https://www.mountainproject.com/route/105714944/el-matador' target='_blank'>Devil's Tower</a>, and my favorite climbing locations are the South Platte, Indian Creek and Boulder Canyon.</li>
						<li>I'm getting into 35mm film photography. Checkout my <a href='/projects'>photography</a> page to see some more.</li>
					</ul>
				</p>
			</div>
		</div>
	)
}
export default Biography

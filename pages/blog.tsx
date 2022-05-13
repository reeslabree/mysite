import React from 'react'
import Posts from '../components/Posts';

const Blog = () => {
	return (
		<div
			style={{
				fontSize: '2rem',
				display: 'flex',
				justifyContent: 'left',
				marginTop: '2rem',
			}}
		>
			<Posts />
		</div>
	)
} 
export default Blog;

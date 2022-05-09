import React from 'react'
import PostItem from '../components/Posts';

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
			<PostItem />
		</div>
	)
} 
export default Blog;

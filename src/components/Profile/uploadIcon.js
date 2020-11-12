import React from 'react';

function uploadIcon() {
	return (
		<div className='profile__upload-icon'>
			<img
				id='profile__upload-icon'
				src={require('../Profile/images/upload-icon.png')}
				alt='upload picture icon'
			/>
		</div>
	);
}

export default uploadIcon;

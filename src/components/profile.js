import React from 'react';

const style = {
	maxHeight: '10rem',
	borderRadius: '50%',
	marginRight: 'auto',
	marginLeft: 'auto',
	display: 'block',
};

const Profile = () => (
	<img
		src='https://avatars1.githubusercontent.com/u/7924611?s=400&u=7553830906b2dc9c9d495c5f16c63cf4d84b3b59&v=4'
		alt='me'
		style={style}
	/>
);
export default Profile;

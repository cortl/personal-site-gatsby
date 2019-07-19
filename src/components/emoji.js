import React from 'react';

export const Emoji = ({ symbol, description }) => (
	<span role='img' aria-label={description}>
		{symbol}
	</span>
);

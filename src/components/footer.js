import React from 'react';
import InlineList from '../components/inline-list';
import { socials } from '../data/socials';

export const Footer = () => (
	<div id='footer'>
		<div style={{ marginTop: '5rem' }} />
		<InlineList style={{ marginRight: 'auto', marginLeft: 'auto' }}>
			{socials.map((social, index) => (
				<li key={index}>
					<a href={social.url}>{social.name}</a>
				</li>
			))}
		</InlineList>
	</div>
);

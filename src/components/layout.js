import React from 'react';
import PropTypes from 'prop-types';
import { Footer } from './footer';
import SEO from './seo';

const Layout = ({ children }) => (
	<div
		style={{
			marginLeft: 'auto',
			marginRight: 'auto',
			padding: '1.5rem 1.125rem',
			paddingTop: '1.5rem',
			maxWidth: '40rem',
		}}
	>
		<SEO
			title=' '
			keywords={[
				`gatsby`,
				`application`,
				`react`,
				'personal',
				'personal site',
				'cortlan',
				'bainbridge',
				'cortlan bainbridge',
				'open source',
				'software',
			]}
		/>
		{children}
		<Footer />
	</div>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;

import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Profile from './profile';

export const Header = ({ siteTitle }) => (
	<div id='header'>
		<Profile />
		<h1>
			<Link
				to='/'
				style={{
					textDecoration: `none`,
				}}
			>
				{siteTitle}
			</Link>
		</h1>
	</div>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

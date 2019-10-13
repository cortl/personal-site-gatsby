import React from 'react';
import Profile from './profile';
import { StaticQuery, graphql } from 'gatsby';

export const Header = () => (
	<StaticQuery
		query={graphql`
			{
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<div id='header'>
				<Profile />
				<h1>{data.site.siteMetadata.title}</h1>
			</div>
		)}
	/>
);

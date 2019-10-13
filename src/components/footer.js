import React from 'react';
import InlineList from '../components/inline-list';
import { StaticQuery, graphql } from 'gatsby';
import { byFile } from '../pages/index';

export const Footer = () => (
	<StaticQuery
		query={graphql`
			{
				allDataJson {
					edges {
						node {
							file
							socials {
								name
								url
							}
						}
					}
				}
			}
		`}
		render={data => {
			const socials = data.allDataJson.edges.find(byFile('social')).node
				.socials;

			return (
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
		}}
	/>
);

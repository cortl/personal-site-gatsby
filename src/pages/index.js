import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Emoji } from '../components/emoji';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import '../styles/list.css';
import '../styles/index.css';

export const byFile = fileName => edge => edge.node.file === fileName;

const IndexPage = () => (
	<StaticQuery
		query={graphql`
			{
				allDataJson {
					edges {
						node {
							file
							projects {
								name
								emoji
								emojiDescription
								description
								url
							}
							socials {
								name
								url
							}
						}
					}
				}
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => {
			const projects = data.allDataJson.edges.find(byFile('projects')).node
				.projects;
			return (
				<Layout>
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
					<Header siteTitle={data.site.siteMetadata.title} />
					<div></div>
					<h2>About</h2>
					<p>
						I'm Cortlan, a detail oriented full stack software engineer. I've
						worked on embedded systems like UAVs, infrastructure and server
						maintenance, cloud API development, and front-end development
					</p>
					<p>
						I'm a open source aficionado{' '}
						<Emoji symbol={'💻'} description={'computer'} />
						, powerlifting enthusiast
						<Emoji symbol={'🏋️‍♀'} description={'male weightlifter'} />, and
						coffee consumer{' '}
						<Emoji symbol={'☕'} description={'cup of coffee'} />
					</p>
					<h2>Projects</h2>
					<ul>
						{projects.map((project, index) => (
							<li key={index}>
								<a href={project.url}>
									<strong>{project.name}</strong>
								</a>
								<Emoji
									symbol={project.emoji}
									description={project.emojiDescription}
								/>
								{` - ${project.description}`}
							</li>
						))}
					</ul>
					<Footer />
				</Layout>
			);
		}}
	/>
);

export default IndexPage;

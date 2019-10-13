import React from 'react';
import Layout from '../components/layout';
import { Header } from '../components/header';
import { Emoji } from '../components/emoji';
import { projects } from '../data/projects';
import '../styles/list.css';
import '../styles/index.css';

export const byFile = fileName => edge => edge.node.file === fileName;

const IndexPage = () => (
	<Layout>
		<Header />
		<h2>About</h2>
		<p>
			I'm Cortlan, a detail oriented full stack software engineer. I've worked
			on embedded systems like UAVs, infrastructure and server maintenance,
			cloud API development, and front-end development
		</p>
		<p>
			I'm a open source aficionado{' '}
			<Emoji symbol={'💻'} description={'computer'} />
			, powerlifting enthusiast
			<Emoji symbol={'🏋️‍♀'} description={'male weightlifter'} />, and coffee
			consumer <Emoji symbol={'☕'} description={'cup of coffee'} />
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
	</Layout>
);

export default IndexPage;

import React from 'react';

import Layout from '../components/layout';
import { Header } from '../components/header';
import { Emoji } from '../components/emoji';
import { projects } from '../data/projects';

import '../styles/list.css';
import '../styles/index.css';

const IndexPage = () => (
	<Layout>
		<Header />
		<h2>About</h2>
		<p>
			I'm Cortlan, a software engineer with a passion for web development. I've
			worked on embedded systems like UAVs and ECUs, infrastructure and server
			maintenance, cloud API development, and front-end development
		</p>
		<p>
			I'm an open source aficionado{' '}
			<Emoji symbol={'💻'} description={'computer'} />, powerlifting enthusiast{' '}
			<Emoji symbol={'🏋️‍♂️'} description={'male weightlifter'} />, home cook{' '}
			<Emoji symbol={'👨‍🍳'} description={'male chef'} />, and coffee consumer{' '}
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
	</Layout>
);

export default IndexPage;

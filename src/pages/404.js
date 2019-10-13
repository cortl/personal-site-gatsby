import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Emoji } from '../components/emoji';
import { Link } from 'gatsby';

const NotFoundPage = () => (
	<Layout>
		<SEO title='404: Not found' />
		<h1>404 Not Found</h1>
		<p>
			This page doesn't exist
			<Emoji symbol={'😢'} description={'crying face'} />. Maybe you'd like to
			go <Link to='/'>here?</Link>
		</p>
	</Layout>
);

export default NotFoundPage;

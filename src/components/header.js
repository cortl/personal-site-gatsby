import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Profile from './profile';

const Header = ({ siteTitle }) => (
  <>
    <Profile />
    <h1>
      <Link
        to="/"
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

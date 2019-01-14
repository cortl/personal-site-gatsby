import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import Header from './header'

// import '../../node_modules/react-skeleton-css/styles/skeleton.2.0.4.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '1.5rem 1.125rem',
        paddingTop: '1.5rem',
        maxWidth: "40rem"
      }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
          <footer>
          </footer>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

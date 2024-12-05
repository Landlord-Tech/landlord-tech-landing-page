/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ lang, meta, title, description, canonical }) { // Añadido 'canonical'
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: "facebook-domain-verification",
          content: "3or5i46s1vrpc4v6rh2x309hxkix5c",
        },
      ].concat(meta)}
    >
      {/* Etiqueta canonical personalizada */}
      {canonical && <link rel="canonical" href={canonical} />}

      <meta
        name="trustpilot-one-time-domain-verification-id"
        content="b8bc146e-8e9b-4c23-b6c3-14020d16a77e"
      />
      <meta name="bizjudge-site-verification" content="e99084cc66c3fc07597feba0fcae2840" />
      
      <script>
        {`
          var ubPopup = document.createElement("script");
          ubPopup.src = "https://cd936e1b3bf74d00b2e7805e49f7877f.js.ubembed.com";
          ubPopup.referrerPolicy = "strict-origin-when-cross-origin";
          ubPopup.async = true;
          document.body.appendChild(ubPopup);
        `}
      </script>
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  canonical: null, // Añadido 'canonical' en defaultProps
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  canonical: PropTypes.string, // Añadido 'canonical' en propTypes
}

export default Seo
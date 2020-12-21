import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

interface SEOProps {
  description?: string
  lang?: string
  meta?: any[]
  title: string
}

const SEO: React.FC<SEOProps> = props => {
  const { title, description = "", meta = [], lang = "en" } = props

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
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : ""}
      link={[
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
        },
      ]}
      meta={[
        {
          name: `viewport`,
          content: "minimum-scale=1, initial-scale=1, width=device-width",
        },
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
      ].concat(meta)}
    />
  )
}

export default SEO

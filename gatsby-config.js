module.exports = {
  siteMetadata: {
    title: `Pet Policies Done Right | LandlordTech`,
    description: `Increase revenue, transparency, and tenant satisfaction with the most advanced pet policy platform on the market.`,
    author: `UltraLabs`,
    siteUrl: `https://landlordtech.com`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://landlordtech.com",
        sitemap: "https://landlordtech.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: "uploads",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `header`,
        path: `${__dirname}/src/markdown/header`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `footer`,
        path: `${__dirname}/src/markdown/footer`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `terms-and-conditions`,
        path: `${__dirname}/src/markdown/terms-and-conditions`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `privacy-policy`,
        path: `${__dirname}/src/markdown/privacy-policy`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contact-us`,
        path: `${__dirname}/src/markdown/contact-us`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contact-form`,
        path: `${__dirname}/src/markdown/contact-form`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/markdown/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `request-demo`,
        path: `${__dirname}/src/markdown/request-demo`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `not-found`,
        path: `${__dirname}/src/markdown/not-found`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `homepage-hero-1`,
        path: `${__dirname}/src/markdown/homepage-hero-1`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `homepage-hero-2`,
        path: `${__dirname}/src/markdown/homepage-hero-2`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `homepage-about-section`,
        path: `${__dirname}/src/markdown/homepage-about-section`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `info-box`,
        path: `${__dirname}/src/markdown/info-box`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `info-block`,
        path: `${__dirname}/src/markdown/info-block`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `info-section`,
        path: `${__dirname}/src/markdown/info-section`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `testimonial`,
        path: `${__dirname}/src/markdown/testimonial`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `with-pet-calculator`,
        path: `${__dirname}/src/markdown/with-pet-calculator`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `with-no-pet-calculator`,
        path: `${__dirname}/src/markdown/with-no-pet-calculator`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products-hero-1`,
        path: `${__dirname}/src/markdown/products-hero-1`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products-hero-2`,
        path: `${__dirname}/src/markdown/products-hero-2`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products-hero-3`,
        path: `${__dirname}/src/markdown/products-hero-3`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `multi-tenant-platform-section`,
        path: `${__dirname}/src/markdown/multi-tenant-platform-section`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `landlord-tech-program-section`,
        path: `${__dirname}/src/markdown/landlord-tech-program-section`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about-hero`,
        path: `${__dirname}/src/markdown/about-hero`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about-us-section`,
        path: `${__dirname}/src/markdown/about-us-section`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `our-products-section`,
        path: `${__dirname}/src/markdown/our-products-section`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pricing-hero`,
        path: `${__dirname}/src/markdown/pricing-hero`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pricing-list`,
        path: `${__dirname}/src/markdown/pricing-list`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `faq-list`,
        path: `${__dirname}/src/markdown/faq-list`,
      },
    },

    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "806603740016223",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `none`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
          `gatsby-remark-external-links`,
        ],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FCC425`,
        theme_color: `#FCC425`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -66,
        duration: 400,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    "gatsby-plugin-netlify",
  ],
}

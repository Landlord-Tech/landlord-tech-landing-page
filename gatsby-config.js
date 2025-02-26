module.exports = {
    siteMetadata: {
      title: ``,
      description: ``,
      author: `UltraLabs`,
      siteUrl: `https://landlordtech.com`,
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-image`,
      `gatsby-plugin-sass`,
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-gatsby-cloud`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-client-side-redirect`, // keep it in last in list
      {
        resolve: `gatsby-plugin-react-helmet-canonical-urls`,
        options: {
          siteUrl: `https://landlordtech.com`,
        },
      },
      {
        resolve: "gatsby-plugin-robots-txt",
        options: {
          host: "https://landlordtech.com",
          sitemap: "https://landlordtech.com/sitemap/sitemap-0.xml",
          policy: [{ userAgent: "*", allow: "/" }],
        },
      },
      // {
      //   resolve: `gatsby-plugin-canonical-urls`,
      //   options: {
      //     siteUrl: `https://landlordtech.com`,
      //   },
      // },
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
          name: `accessibility-commitment`,
          path: `${__dirname}/src/markdown/accessibility-commitment`,
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
          name: `homepage-video-section`,
          path: `${__dirname}/src/markdown/homepage-video-section`,
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
          name: `faq-hero`,
          path: `${__dirname}/src/markdown/faq-hero`,
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
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `partners-list`,
          path: `${__dirname}/src/markdown/partners-list`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `partners-detail`,
          path: `${__dirname}/src/markdown/partners-detail`,
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
      {
        resolve: `gatsby-plugin-facebook-pixel`,
        options: {
          pixelId: "806603740016223",
        },
      },
      `gatsby-transformer-sharp`,
      {
        resolve: "gatsby-transformer-remark",
        options: {
          plugins: [
            {
              resolve: "gatsby-remark-embed-video",
              options: {
                width: 800,
                ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
                height: 400, // Optional: Overrides optional.ratio
                related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
                noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
                loadingStrategy: "lazy", //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
                urlOverrides: [
                  {
                    id: "youtube",
                    embedURL: videoId =>
                      `https://www.youtube-nocookie.com/embed/${videoId}`,
                  },
                ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
                containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
                iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
              },
            },
            "gatsby-remark-responsive-iframe", //Optional: Must be loaded after gatsby-remark-embed-video
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
      {
        resolve: "gatsby-plugin-netlify-cms",
        options: {
          modulePath: `${__dirname}/src/cms/cms.js`,
        },
      },
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      `gatsby-plugin-offline`,
      "gatsby-plugin-netlify",
    ],
  }
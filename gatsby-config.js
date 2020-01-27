module.exports = {
  siteMetadata: {
    title: `Mario Hoyos | Personal Blog`,
    name: `Mario Hoyos`,
    siteUrl: `https://mariohoyos.io`,
    description: `Personal blog for Mario Hoyos. Often blogs about web development, music, general observations.`,
    hero: {
      heading: `I write about stuff I find interesting, you can read it if you'd like :)`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/marioahoyos`
      },
      {
        name: `github`,
        url: `https://github.com/mariohoyos92`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/mario-hoyos/`
      }
    ]
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        mailchimp: true,
        sources: {
          local: true
          // contentful: true,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mario Hoyos`,
        short_name: `Mario`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://mariohoyos.us4.list-manage.com/subscribe/post?u=33da985eb59d77e7e35d2e960&amp;id=668d2d0e4f"
      }
    },
    "gatsby-plugin-twitter",
    "gatsby-plugin-sitemap"
  ]
};

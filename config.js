module.exports = {
  pathPrefix: '',
  siteUrl: 'https://www.zaw.icu',
  siteTitle: 'zoniha',
  siteDescription: "zoniha's portfolio",
  author: 'zoniha',
  postsForArchivePage: 3,
  defaultLanguage: 'ja',
  pages: {
    home: '/',
    blog: 'blog',
    tag: 'tags',
    contact: 'contact',
  },
  social: {
    github: 'https://github.com/zoniha',
    zenn: 'https://zenn.dev/astrologian',
  },
  contactFormUrl: process.env.GATSBY_CONTACT_FORM_ENDPOINT,
  googleAnalyticTrackingId: process.env.GATSBY_GA_TRACKING_ID,
  tags: {
    html: {
      name: 'HTML',
      color: '#f7f8f0',
    },
    css: {
      name: 'CSS',
      color: '#f7f8f0',
    },
    python: {
      name: 'Python',
      color: '#f7f8f0',
    },
    django: {
      name: 'Django',
      color: '#f7f8f0',
    },
    flutter: {
      name: 'Flutter',
      color: '#f7f8f0',
    },
  },
};

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: '',
  siteUrl: 'https://aspected-helios.netlify.app/',
  siteTitle: 'Stellar Explosion',
  siteDescription: 'Zaw\'s portfolio',
  author: 'Zaw',
  postsForArchivePage: 3,
  defaultLanguage: 'ja',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
    tag: 'tags',
  },
  social: {
    github: 'https://github.com/zoniha',
  },
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  tags: {
    javascript: {
      name: 'Javascript',
      color: '#F7DF1E',
    },
    nodejs: {
      name: 'Node.js',
      color: '#339933',
    },
    typescript: {
      name: 'Typescript',
      color: '#3178C6',
    },
    reactjs: {
      name: 'Reactjs',
      color: '#61DAFB',
    },
    gatsby: {
      name: 'Gatsby.js',
      color: '#663399',
    },
    html: {
      name: 'HTML',
      color: '#E34F26',
    },
    css: {
      name: 'CSS',
      color: '#1572B6',
    },
    python: {
      name: 'Python',
      color: '#3776AB',
    },
    work: {
      name: 'Work',
      color: '#812990',
    },
  },
};

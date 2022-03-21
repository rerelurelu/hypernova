import React from 'react';
import { Layout } from 'antd';
import { graphql } from 'gatsby';
import { Twemoji } from 'react-emoji-render';
import Img from 'gatsby-image';

import { Header, SidebarWrapper, SEO, BackTop } from '../../components/index';

import 'prismjs/themes/prism-solarizedlight.css';
import './highlight-syntax.less';
import * as style from './post.module.less';

const Post = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const { title, emoji, excerpt, path } = frontmatter;

  return (
    <Layout className="outerPadding background">
      <Layout className="container">
        <SEO
          title={title}
          description={excerpt}
          path={path}
          keywords={['Javascript', 'ReactJS', 'Gatsby', '技術ブログ']}
        />
        <Header />
        <SidebarWrapper>
          <div className="marginTopTitle">
            <p className={style.postEmoji}>
              <Twemoji svg text={emoji || '🥱'} className={style.bannerImg} />
            </p>
            <h1 className={style.title}>{title}</h1>
            <article className={style.blogArticle} dangerouslySetInnerHTML={{ __html: html }} />
            {/* <Comment pageCanonicalUrl={canonicalUrl} pageId={title} /> */}
          </div>
        </SidebarWrapper>
      </Layout>
      <BackTop showBelow={200} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($postPath: String!) {
    markdownRemark(frontmatter: { path: { eq: $postPath } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
        tags
        path
        excerpt
        emoji
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: { path: { ne: $postPath } }
        fileAbsolutePath: { regex: "/index.md$/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            tags
            excerpt
            emoji
          }
        }
      }
    }
  }
`;

export default Post;

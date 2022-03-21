/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Layout, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import '@fontsource/overpass';
import '@fontsource/noto-sans-jp';

import { Header, SEO, SidebarWrapper, TagCard, BackTop } from '../../components/index';
import Config from '../../../config';

const Tags = ({ data }) => {
  const {
    allFile: { edges },
  } = data;
  const rawTags = data.allMarkdownRemark.edges
    .map((edge) => edge.node.frontmatter.tags)
    .reduce((prev, curr) => prev.concat(curr));
  rawTags.filter((tag, index) => index === rawTags.indexOf(tag)).sort(); // Remove duplicates and sort values
  // const tagPage = Config.pages.tag;
  const tagData = Config.tags;
  return (
    <Layout className="outerPadding background">
      <Layout className="container">
        <Header />
        <SEO
          title="Tags"
          description="Blog tags"
          path="tags"
        />
        <SidebarWrapper>
          <div className="marginTopTitle">
            <h1 className="titleSeparate">Tags</h1>
          </div>
          <Row gutter={[30, 20]} style={{ marginTop: '30px' }}>
            {edges.map((val) => (
              <Col key={val.node.name} xs={24} sm={24} md={12} lg={8}>
                <TagCard
                  img={val.node.childImageSharp.fluid.src}
                  name={val.node.name}
                  color={tagData[val.node.name].color}
                />
              </Col>
            ))}
          </Row>
        </SidebarWrapper>
      </Layout>
      <BackTop showBelow={200} />
    </Layout>
  );
};

Tags.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string.isRequired,
            childImageSharp: PropTypes.shape({
              fluid: PropTypes.object.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/index.md$/" } }) {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "tags" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default Tags;

import React from 'react';
import { Layout, Row, Col } from 'antd';

import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import ContactForm from '../../components/PageFragments/ContactForm';
import SEO from '../../components/Seo';
import BackTop from '../../components/BackTop'

const Contact = () => (
  <Layout className="outerPadding background">
    <Layout className="container">
      <SEO
        title="Contact"
        description=""
        path="/contact"
        keywords={['FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby', 'technology']}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Contact</h1>
        </div>
        <Row gutter={[40, 20]}>
          <Col sm={24} md={24} lg={12}>
            <div></div>
          </Col>
          <ContactForm />
        </Row>
      </SidebarWrapper>
    </Layout>
    <BackTop showBelow={200} />
  </Layout>
);

export default Contact;

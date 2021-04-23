import React from 'react';
import { Layout, Row, Col } from 'antd';

import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import ContactForm from '../../components/PageFragments/ContactForm';
import SEO from '../../components/Seo';
import Scroll from '../../components/Scroll'

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
    <Scroll showBelow={100} />
  </Layout>
);

export default Contact;

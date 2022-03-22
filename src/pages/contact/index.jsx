import React from 'react';
import { Layout } from 'antd';

import { Header, SidebarWrapper, ContactForm, SEO, BackTop } from '../../components/index';

const Contact = () => (
  <Layout className="outerPadding background">
    <Layout className="container">
      <SEO title="Contact" description="" path="/contact" />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Contact</h1>
        </div>
        <ContactForm />
      </SidebarWrapper>
    </Layout>
    <BackTop showBelow={200} />
  </Layout>
);

export default Contact;

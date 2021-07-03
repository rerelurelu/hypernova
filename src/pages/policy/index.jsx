import React from 'react';
import { Layout } from 'antd';
import '@fontsource/overpass';
import '@fontsource/noto-sans-jp';

import { Header, SidebarWrapper, PrivacyPolicy, BackTop } from '../../components/index';

const Policy = () => (
  <Layout className="outerPadding background">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <PrivacyPolicy />
      </SidebarWrapper>
    </Layout>
    <BackTop showBelow={200} />
  </Layout>
);

export default Policy;

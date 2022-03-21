import React from 'react';
import { Layout } from 'antd';
import '@fontsource/overpass';
import '@fontsource/noto-sans-jp';

import { Header, SidebarWrapper, AboutMe, BackTop } from '../components/index';

const MainPage = () => (
  <Layout className="outerPadding background">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <AboutMe />
      </SidebarWrapper>
    </Layout>
    <BackTop showBelow={200} />
  </Layout>
);

export default MainPage;

import React from 'react';
import { Layout } from 'antd';
import '@fontsource/overpass';
import '@fontsource/noto-sans-jp';

import Header from '../components/PageLayout/Header';
import SidebarWrapper from '../components/PageLayout/Sidebar';
import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import Skills from '../components/PageFragments/HomePage/SkillProgress';
import Scroll from '../components/Scroll'

export default () => (
  <Layout className="outerPadding background">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <AboutMe />
          <Skills />
        </>
      </SidebarWrapper>
    </Layout>
    <Scroll showBelow={100} />
  </Layout>
);

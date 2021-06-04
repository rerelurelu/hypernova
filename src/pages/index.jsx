import React from 'react';
import { Layout } from 'antd';
import '@fontsource/overpass';
import '@fontsource/noto-sans-jp';

import Header from '../components/PageLayout/Header';
import SidebarWrapper from '../components/PageLayout/Sidebar';
import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import Skills from '../components/PageFragments/HomePage/SkillProgress';
import BackTop from '../components/BackTop'

const MainPage = () => (
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
    <BackTop showBelow={200} />
  </Layout>
);

export default MainPage;

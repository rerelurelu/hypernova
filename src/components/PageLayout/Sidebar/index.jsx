import React from 'react';
import { Affix, Layout, Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import FeatherIcon from 'feather-icons-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { globalHistory } from '@reach/router';
import { useWindowSize } from '../../../utils/hooks';

import * as style from './sidebar.module.less';
/* Disable importing Font Awesome css */
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import Config from '../../../../config';
import { Footer } from '../../index';

const { Content } = Layout;
const { github, zenn } = Config.social;

const DomContent = () => (
  <aside className={style.sidebarItems}>
    <div className={style.profileAvatar} />
    <div className={`${style.name} centerAlign`}>
      <div className={`${style.boxName} centerAlign`}>
        <h2 className={`${style.defaultCursor}`}>
          <span>zoniha</span>
        </h2>
      </div>
      <div className={`${style.badge} ${style.badgeGray} ${style.defaultCursor}`}>Job hunting</div>
      <div className="centerAlign box">
        <a href={github} target="_blank" label="button" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className={style.sideBarIcon} />
        </a>
        <a
          href={zenn}
          title="zenn.dev/astrologian"
          target="_blank"
          label="button"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLink}
            className={`${style.sideBarIcon} ${style.sideBarIconMargin}`}
          />
        </a>
      </div>
      <div className="personalInfo">
        <ul className={`box ${style.badge} contactBlock`}>
          <li className={`${style.contactBlockItem} ${style.defaultCursor}`}>
            <span>
              <FeatherIcon size="19" icon="calendar" />{' '}
            </span>
            &nbsp; &nbsp; September 29
          </li>
          <li className={`${style.contactBlockItem} ${style.defaultCursor}`}>
            <span>
              <FeatherIcon size="19" icon="map-pin" />
            </span>{' '}
            &nbsp; &nbsp; Nagano, Japan
          </li>
        </ul>
      </div>
    </div>
  </aside>
);

const Sidebar = (props) => {
  const [width] = useWindowSize();
  const { children } = props;
  const { pathname } = globalHistory.location;
  let domContent = <DomContent />;
  if (width > 997) {
    domContent = (
      <Affix offsetTop={0}>
        <DomContent />
      </Affix>
    );
  }
  if (width < 768) {
    domContent = <></>;
    if (pathname === '/') {
      domContent = <DomContent />;
    }
  }
  return (
    <Layout>
      <Content className={`${style.content} ${style.background}`}>
        <Row>
          <Col sm={24} md={9} lg={6} className={style.sidebarContent}>
            {domContent}
          </Col>
          <Col sm={24} md={15} lg={18}>
            <Layout
              className={`${style.background} ${style.boxContent}  borderRadiusSection`}
            >
              {children}
            </Layout>
          </Col>
          <Footer />
        </Row>
      </Content>
    </Layout>
  );
};

export const Sidebar404 = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Content className={`${style.content} ${style.background} `}>
        <Row>
          <Col sm={24} md={24} lg={24}>
            <Layout className={`${style.background} ${style.boxContent} ${style.sideBar404Radius}`}>
              {children}
            </Layout>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Sidebar;

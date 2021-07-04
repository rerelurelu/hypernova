import React from 'react';
import { Row, Col } from 'antd';

import { ProgressBar } from '../../index';

const SkillsProgress = () => (
  <div>
    <h2 className="titleSeparate">My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={80} text="Python" />
        <ProgressBar percent={55} text="Ruby" />
        <ProgressBar percent={75} text="HTML / CSS" />
        <ProgressBar percent={70} text="Django" />
        <ProgressBar percent={65} text="Gatsby" />
        <ProgressBar percent={65} text="PostgreSQL" />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={70} text="Javascript" />
        <ProgressBar percent={65} text="Typescript" />
        <ProgressBar percent={70} text="Sass" />
        <ProgressBar percent={65} text="React" />
        <ProgressBar percent={70} text="TensorFlow" />
        <ProgressBar percent={70} text="Tailwind CSS" />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;

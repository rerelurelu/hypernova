import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={85}
          text="Python"
        />
        <ProgressBar
          percent={60}
          text="Ruby"
        />
        <ProgressBar
          percent={85}
          text="CSS3"
        />
        <ProgressBar
          percent={70}
          text="Django"
        />
        <ProgressBar
          percent={70}
          text="Gatsby"
        />
        <ProgressBar
          percent={70}
          text="PostgreSQL"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={75}
          text="Javascript"
        />
        <ProgressBar
          percent={85}
          text="HTML5"
        />
        <ProgressBar
          percent={85}
          text="Sass"
        />
        <ProgressBar
          percent={75}
          text="TensorFlow"
        />
        <ProgressBar
          percent={80}
          text="Tailwind CSS"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;

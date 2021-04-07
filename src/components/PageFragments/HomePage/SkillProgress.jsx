import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2 className="titleSeparate">My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={70}
          text="Python"
        />
        <ProgressBar
          percent={50}
          text="Ruby"
        />
        <ProgressBar
          percent={65}
          text="CSS"
        />
        <ProgressBar
          percent={60}
          text="Django"
        />
        <ProgressBar
          percent={55}
          text="Gatsby"
        />
        <ProgressBar
          percent={60}
          text="PostgreSQL"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={65}
          text="Javascript"
        />
        <ProgressBar
          percent={70}
          text="HTML5"
        />
        <ProgressBar
          percent={65}
          text="Sass"
        />
        <ProgressBar
          percent={70}
          text="TensorFlow"
        />
        <ProgressBar
          percent={60}
          text="Tailwind CSS"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;

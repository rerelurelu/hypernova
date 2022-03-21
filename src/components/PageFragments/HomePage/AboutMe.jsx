import React from 'react';
import { SEO } from '../../index';

const pageText = {
  paraOne: `大学時代は機械学習を学び、データ分析プロジェクトへの参加や画像認識技術を応用してスポーツの試合映像分析を行った経験があります。
    現在はSES企業で様々な案件に参加し、開発を行っています。`,
  paraTwo: `自身の作成したモノで人々の生活を豊かにするのが夢です。`,
  description: `Personal website of zoniha.`,
};

const AboutMe = () => {
  const description = `${pageText.description}`;
  return (
    <>
      <SEO
        title="HOME"
        description={description}
        path=""
        keywords={[
          'エンジニア',
          'Javascript',
          'ReactJS',
          'GatsbyJS',
          'Python',
          'Django',
          'Flutter',
        ]}
      />
      <h1 className="titleSeparate">About Me</h1>
      <p>{pageText.paraOne}</p>
      <p>{pageText.paraTwo}</p>
    </>
  );
};
export default AboutMe;

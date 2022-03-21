import React from 'react';
import { SEO } from '../../index';

const pageText = {
  paraOne: `大学では経済学やデータサイエンス、機械学習を学びました。
    大学とプロバスケットボールチームが提携して行われたデータ分析プロジェクトに参加し、
    画像認識技術を応用して映像から選手やボールの検出を行うプログラムの作成を担当しました。`,
  paraTwo: `現在はWebサービスやモバイルアプリ開発の知識をつけるためにReactやFlutterの勉強をしています。`,
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

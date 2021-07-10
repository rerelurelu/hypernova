import React from 'react';

import { SEO } from '../../index';
import { titleSpace } from './policy.module.less';

const pageText = {
  paraOne: {
    title: `・『個人情報の取得』`,
    description: `本アプリが個人情報を取得するものはありません。`,
  },
  paraTwo: {
    title: `・『個人情報の利用』`,
    description: `本アプリが個人情報を利用することはありません。`,
  },
  paraThree: {
    title: `・『個人情報の提供』`,
    description: `本アプリが個人情報を第三者へ提供することはありません。`,
  },
  paraFour: {
    title: `・『ユーザが入力したデータやその記録』`,
    description: `ユーザが入力した情報が保存されることや、ユーザの同意なしに外部に送信されることはありません。`,
  },
};

const PrivacyPolicy = () => {
  return (
    <>
      <SEO title="Privacy Policy" path="" keywords={['privacy policy']} />
      <h1 className="titleSeparate">プライバシーポリシー</h1>
      <h3>{pageText.paraOne.title}</h3>
      <p>{pageText.paraOne.description}</p>
      <h3 className={titleSpace}>{pageText.paraTwo.title}</h3>
      <p>{pageText.paraTwo.description}</p>
      <h3 className={titleSpace}>{pageText.paraThree.title}</h3>
      <p>{pageText.paraThree.description}</p>
      <h3 className={titleSpace}>{pageText.paraFour.title}</h3>
      <p>{pageText.paraFour.description}</p>
    </>
  );
};

export default PrivacyPolicy;

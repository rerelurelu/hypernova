import React from 'react';
import { stripTags } from '../../../utils/stripTags';

import { SEO } from '../../index';

const pageText = {
  paraOne: `Hello, I'm  Zaw. I studied data science and machine learning at university.
    At the university, I participated in a data analysis project with Shiga Lakestars,
    and I was in charge of creating a program to detect players and balls.`,
  paraTwo: `Currently I'm studying Dart and Flutter in order to acquire
    knowledge in mobile application developer skills.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <SEO
        title="HOME"
        description={description}
        path=""
        keywords={['FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
      />
      <h1 className="titleSeparate">About Me</h1>
      <p>{pageText.paraOne}</p>
      <p>{pageText.paraTwo}</p>
    </>
  );
};
export default AboutMe;

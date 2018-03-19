import React from 'react';
import { Spacing } from 'react-elemental';
import Title from 'app/react/components/doc-body/title';
import Markdown from 'app/react/components/markdown';
import { about } from 'docs';

/**
 * About document page.
 */
const About = () => (
  <div>
    <Spacing size="large" bottom>
      <Title
        name="react-elemental"
        description="Modern, flat UI library for React"
        link="https://github.com/LINKIWI/react-elemental"
      />
    </Spacing>

    <Markdown source={about} />
  </div>
);

export default About;

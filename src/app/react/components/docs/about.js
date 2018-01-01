import React from 'react';
import { Spacing } from 'react-elemental';
import Header from 'app/react/components/header';
import Title from 'app/react/components/doc-body/title';
import Markdown from 'app/react/components/markdown';
import { about } from 'docs';

/**
 * About document page.
 */
const About = () => (
  <div>
    <Spacing size="large" bottom>
      <Header
        additionalBreadcrumbs={[
          { text: 'About', href: '/' },
        ]}
      />
    </Spacing>

    <Spacing size="large" bottom>
      <Title
        name="react-elemental"
        description="Modern, flat UI library for React"
      />
    </Spacing>

    <Markdown source={about} />
  </div>
);

export default About;

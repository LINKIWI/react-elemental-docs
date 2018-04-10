import React from 'react';
import { Link, Spacing } from 'react-elemental';
import Logo from 'app/react/components/ui/logo';
import Markdown from 'app/react/components/markdown';
import { about } from 'docs';

/**
 * About document page.
 */
const About = () => (
  <div>
    <Spacing size="large" bottom>
      <Link
        type="plain"
        href="https://github.com/LINKIWI/react-elemental"
        style={{
          display: 'inline-block',
          maxWidth: '350px',
          width: '100%',
        }}
      >
        <Logo style={{ width: '100%' }} subtitle />
      </Link>
    </Spacing>

    <Markdown source={about} />
  </div>
);

export default About;

import React from 'react';
import { Spacing } from 'react-elemental';
import Header from 'app/react/components/header';
import Title from 'app/react/components/doc-body/title';
import Markdown from 'app/react/components/markdown';
import { examples } from 'docs';

/**
 * Examples document page.
 */
const Examples = () => (
  <div>
    <Spacing size="large" bottom>
      <Header />
    </Spacing>

    <Spacing size="large" bottom>
      <Title
        name="Examples"
        description="Example projects that use react-elemental"
      />
    </Spacing>

    <Markdown source={examples} />
  </div>
);

export default Examples;

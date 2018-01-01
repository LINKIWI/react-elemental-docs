import React from 'react';
import { Text, Spacing } from 'react-elemental';
import Title from 'app/react/components/doc-body/title';

/**
 * Generic component to display if the selected component is unknown or invalid.
 */
const Unknown = () => (
  <div>
    <Spacing size="large" bottom>
      <Title
        name="Component not found"
        description="This doesn't seem to be a valid component."
      />
    </Spacing>

    <Text>
      Try selecting one of the components in the left sidebar.
    </Text>
  </div>
);

export default Unknown;

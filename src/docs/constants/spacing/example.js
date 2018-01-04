import React from 'react';
import { colors, spacing, Spacing, Text } from 'react-elemental';

const SpacingExample = () => (
  <div>
    <Spacing size="large" style={{ backgroundColor: colors.gray10 }} bottom padding>
      <Text>
        Large space below
      </Text>
    </Spacing>
    <Spacing size={spacing.small} top padding>
      <Text>
        Small space above
      </Text>
    </Spacing>
  </div>
);

export default SpacingExample;

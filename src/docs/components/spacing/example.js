import React from 'react';
import { colors, Spacing, Text } from 'react-elemental';

const SPACING_SIZES = [
  'micro',
  'tiny',
  'small',
  'default',
  'large',
  'huge',
  'enormous',
];

const SpacingExample = () => (
  <div>
    {SPACING_SIZES.map((size) => (
      <Spacing key={size} bottom>
        <div style={{ backgroundColor: colors.gray5, display: 'inline-block' }}>
          <Spacing size={size} top right bottom left padding>
            <Text>
              {`${size} spacing`}
            </Text>
          </Spacing>
        </div>
      </Spacing>
    ))}
  </div>
);

export default SpacingExample;

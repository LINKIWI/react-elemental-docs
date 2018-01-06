import React from 'react';
import { Spacing, Spinner, Text, colors } from 'react-elemental';

const SPINNER_SIZES = [
  'alpha',
  'beta',
  'gamma',
  'delta',
];

const SpinnerExample = () => (
  <div>
    <Spacing bottom>
      {SPINNER_SIZES.map((size) => (
        <Spacing
          key={size}
          style={{ alignItems: 'center', display: 'flex' }}
          bottom
        >
          <div style={{ display: 'flex', justifyContent: 'center', width: '50px' }}>
            <Spinner size={size} />
          </div>
          <Text color="gray50" size="kilo" uppercase bold>
            {`${size} size`}
          </Text>
        </Spacing>
      ))}
    </Spacing>

    <Spacing size="small" bottom>
      <Spacing size="small" right inline>
        <Spinner size="delta" accentColor={colors.green} thickness={1} />
      </Spacing>
      <Text color="gray50" size="kilo" uppercase bold inline>
        Thin spinner
      </Text>
    </Spacing>

    <Spacing size="small" bottom>
      <Spacing size="small" right inline>
        <Spinner size="alpha" accentColor={colors.purple} thickness={5} />
      </Spacing>
      <Text color="gray50" size="kilo" uppercase bold inline>
        Thick spinner
      </Text>
    </Spacing>

    <Spacing size="small" bottom>
      <Spacing size="small" right inline>
        <Spinner size="delta" accentColor={colors.red} duration={1.2} />
      </Spacing>
      <Text color="gray50" size="kilo" uppercase bold inline>
        Slow spinner
      </Text>
    </Spacing>
  </div>
);

export default SpinnerExample;

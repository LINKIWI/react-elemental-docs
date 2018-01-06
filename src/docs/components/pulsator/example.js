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
        <Spinner size="delta" color={colors.green} />
      </Spacing>
      <Text color="gray50" size="kilo" uppercase bold inline>
        Succeeding
      </Text>
    </Spacing>

    <Spacing size="small" bottom>
      <Spacing size="small" right inline>
        <Spinner size="delta" color={colors.red} />
      </Spacing>
      <Text color="gray50" size="kilo" uppercase bold inline>
        Erroring
      </Text>
    </Spacing>

    <Spacing size="small" bottom>
      <Spacing size="small" right inline>
        <Spinner size="delta" color={colors.orange} />
      </Spacing>
      <Text color="gray50" size="kilo" uppercase bold inline>
        Why not orange?
      </Text>
    </Spacing>

    <Spacing size="small" bottom>
      <Spacing size="small" right inline>
        <Spinner size="delta" color={colors.purple} transparent />
      </Spacing>
      <Text color="gray50" size="kilo" uppercase bold inline>
        Transparent background
      </Text>
    </Spacing>

    <Spacing size="small" bottom>
      <Spacing size="small" right inline>
        <Spinner size="delta" color={colors.green} pulsate={false} />
      </Spacing>
      <Text color="gray50" size="kilo" uppercase bold inline>
        Disabled pulsation
      </Text>
    </Spacing>
  </div>
);

export default SpinnerExample;

import React from 'react';
import { Pulsator, Spacing, Text, colors } from 'react-elemental';

const PULSATOR_SIZES = [
  'alpha',
  'beta',
  'gamma',
  'delta',
];

const PulsatorExample = () => (
  <div>
    <Spacing bottom>
      {PULSATOR_SIZES.map((size) => (
        <Spacing
          key={size}
          style={{ alignItems: 'center', display: 'flex' }}
          bottom
        >
          <div style={{ display: 'flex', justifyContent: 'center', width: '50px' }}>
            <Pulsator size={size} />
          </div>
          <Text color="gray50" size="kilo" uppercase bold>
            {`${size} size`}
          </Text>
        </Spacing>
      ))}
    </Spacing>

    <Spacing size="small" bottom>
      <Spacing size="small" right inline>
        <Pulsator size="delta" color={colors.green} />
      </Spacing>
      <Text color="gray50" size="kilo" uppercase bold inline>
        Succeeding
      </Text>
    </Spacing>

    <Spacing size="small" bottom>
      <Spacing size="small" right inline>
        <Pulsator size="delta" color={colors.red} />
      </Spacing>
      <Text color="gray50" size="kilo" uppercase bold inline>
        Erroring
      </Text>
    </Spacing>

    <Spacing size="small" bottom>
      <Spacing size="small" right inline>
        <Pulsator size="delta" color={colors.orange} />
      </Spacing>
      <Text color="gray50" size="kilo" uppercase bold inline>
        Why not orange?
      </Text>
    </Spacing>

    <Spacing size="small" bottom>
      <Spacing size="small" right inline>
        <Pulsator size="delta" color={colors.purple} transparent />
      </Spacing>
      <Text color="gray50" size="kilo" uppercase bold inline>
        Transparent background
      </Text>
    </Spacing>

    <Spacing size="small" bottom>
      <Spacing size="small" right inline>
        <Pulsator size="delta" color={colors.green} inactive />
      </Spacing>
      <Text color="gray50" size="kilo" uppercase bold inline>
        Disabled pulsation
      </Text>
    </Spacing>
  </div>
);

export default PulsatorExample;

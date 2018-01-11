import React from 'react';
import { colors, Pulsator, Spacing, Tag, Text } from 'react-elemental';

const GRAYSCALE_COLORS = [
  'white',
  ...Object.keys(colors).filter((name) => name.startsWith('gray')),
  'black',
];

const ColorsExample = () => (
  <div>
    <Spacing bottom>
      <Text color="primary">
        You can specify the color name directly.
      </Text>
      <Text color={colors.red}>
        You can, alternatively, pass a reference to the color constant.
      </Text>
    </Spacing>

    <Spacing bottom>
      <Spacing size="small" bottom>
        <Text>
          There are many levels of gray:
        </Text>
      </Spacing>

      {GRAYSCALE_COLORS.map((gray) => (
        <Spacing
          key={gray}
          size="tiny"
          style={{ alignItems: 'center', display: 'flex' }}
          bottom
        >
          <Spacing right inline>
            <Pulsator
              color={colors[gray]}
              style={{ display: 'inherit' }}
              inactive
            />
          </Spacing>
          <Text inline>
            {gray}
          </Text>
        </Spacing>
      ))}
    </Spacing>

    <Spacing bottom>
      <Spacing size="small" bottom>
        <Tag
          backgroundColor={colors.redLight}
          outlineColor={colors.red}
          text="Red"
        />
      </Spacing>
      <Spacing size="small" bottom>
        <Tag
          backgroundColor={colors.purpleLight}
          outlineColor={colors.purple}
          text="Purple"
        />
      </Spacing>
      <Spacing size="small" bottom>
        <Tag
          backgroundColor={colors.yellowLight}
          outlineColor={colors.yellow}
          text="Yellow"
        />
      </Spacing>
      <Spacing size="small" bottom>
        <Tag
          backgroundColor={colors.orangeLight}
          outlineColor={colors.orange}
          text="Orange"
        />
      </Spacing>
    </Spacing>
  </div>
);

export default ColorsExample;

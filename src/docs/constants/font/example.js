import React from 'react';
import Github from 'react-icons/lib/fa/github';
import { sizes, Spacing, Text } from 'react-elemental';

const SizesExample = () => (
  <div>
    <Spacing bottom>
      <Text size={sizes.epsilon}>
        I am an epsilon-sized text block
      </Text>
    </Spacing>

    <Spacing bottom>
      <Text inline>
        You can use the size constants in any context, like here:
      </Text>
      <Spacing size="tiny" left inline>
        <Github style={{ fontSize: sizes.iota }} />
      </Spacing>
    </Spacing>
  </div>
);

export default SizesExample;

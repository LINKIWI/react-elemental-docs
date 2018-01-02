import React from 'react';
import { colors, LoadingBar, Spacing } from 'react-elemental';

const LoadingBarExample = () => (
  <div>
    <Spacing bottom>
      <LoadingBar thickness={2} />
    </Spacing>

    <Spacing bottom>
      <LoadingBar color={colors.green} thickness={4} />
    </Spacing>

    <Spacing bottom>
      <LoadingBar color={colors.yellow} thickness={4} duration={3000} />
    </Spacing>

    <Spacing bottom>
      <LoadingBar color={colors.red} thickness={4} duration={500} delay={50} />
    </Spacing>
  </div>
);

export default LoadingBarExample;

import React from 'react';
import { colors, Link, Spacing } from 'react-elemental';
import Logo from 'app/react/components/ui/logo';

/**
 * Footer displayed below the body of each section.
 */
const Footer = () => (
  <Spacing bottom padding>
    <Spacing size="small" bottom>
      <div style={{ backgroundColor: colors.gray5, width: '100%', height: '1px' }} />
    </Spacing>

    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
      <Link type="plain" href="https://github.com/LINKIWI/react-elemental">
        <Logo
          primaryColor={colors.gray15}
          height={null}
          width="130px"
          viewBox="0 0 446.934 34"
        />
      </Link>
    </div>
  </Spacing>
);

export default Footer;

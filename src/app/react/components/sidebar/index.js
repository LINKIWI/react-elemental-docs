import React from 'react';
import PropTypes from 'prop-types';
import { Spacing } from 'react-elemental';
import SidebarList from 'app/react/components/sidebar/list';
import Heading from 'app/react/components/sidebar/heading';
import Version from 'app/react/components/sidebar/version';
import {
  SIDEBAR_HOME_LIST,
  SIDEBAR_COMPONENTS_LIST,
  SIDEBAR_CONSTANTS_LIST,
} from 'resources/data/sidebar';

const { GIT_SHA } = process.env;

const Sidebar = ({ selected }) => (
  <Spacing size="small" top padding>
    <Spacing size="small" bottom>
      <Heading text="react elemental" />
      <SidebarList
        items={SIDEBAR_HOME_LIST}
        selected={selected}
      />
    </Spacing>

    <Spacing size="small" bottom>
      <Heading text="Components" />
      <SidebarList
        items={SIDEBAR_COMPONENTS_LIST}
        selected={selected}
      />
    </Spacing>

    <Spacing size="small" bottom>
      <Heading text="Constants" />
      <SidebarList
        items={SIDEBAR_CONSTANTS_LIST}
        selected={selected}
      />
    </Spacing>

    {GIT_SHA && (
      <Spacing size="small" top bottom padding>
        <Version sha={GIT_SHA} />
      </Spacing>
    )}
  </Spacing>
);

Sidebar.propTypes = {
  selected: PropTypes.string,
};

Sidebar.defaultProps = {
  selected: null,
};

export default Sidebar;

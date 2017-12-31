import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SidebarItem from 'app/react/components/sidebar/item';
import { SIDEBAR_WIDTH } from 'app/styles/sidebar';

/**
 * List of clickable items in the sidebar.
 */
const SidebarList = ({ items, selected, history }) => (
  <div style={{ width: SIDEBAR_WIDTH }}>
    {items.map(({ value, label, href }) => (
      <SidebarItem
        key={value}
        label={label}
        isSelected={value === selected}
        onClick={() => history.push(href)}
      />
    ))}
  </div>
);

SidebarList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    // Unique identifier for the item
    value: PropTypes.string.isRequired,
    // Text to display for the item
    label: PropTypes.string.isRequired,
    // SPA href route for the item
    href: PropTypes.string.isRequired,
  })).isRequired,
  // Value of the selected item, if applicable
  selected: PropTypes.string,
  history: PropTypes.object.isRequired,
};

SidebarList.defaultProps = {
  selected: null,
};

export default withRouter(SidebarList);

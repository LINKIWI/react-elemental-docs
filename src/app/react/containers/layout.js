import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { colors, sizes, Button, Spacing } from 'react-elemental';
import Menu from 'react-icons/lib/md/menu';
import Sidebar from 'app/react/components/sidebar';
import Header from 'app/react/components/layout/header';
import Footer from 'app/react/components/layout/footer';
import { SIDEBAR_BACKGROUND_COLOR, SIDEBAR_WIDTH } from 'app/styles/sidebar';

/**
 * Container enforcing consistent layout of a sidebar to the left of the main page content.
 */
class LayoutContainer extends Component {
  static propTypes = {
    // The value of the currently selected sidebar item
    selectedSidebarItem: PropTypes.string,
    // Arbitrary children for the core page contents
    children: PropTypes.node.isRequired,
    // Current client-side pathname
    pathname: PropTypes.string.isRequired,
    // True if the display width is compact, and should reshape the layout accordingly
    isCompact: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    selectedSidebarItem: null,
  };

  state = { isMenuVisible: false };

  setMenuVisibility = (isMenuVisible) => (evt) => {
    evt.preventDefault();
    this.setState({ isMenuVisible });
  };

  render() {
    const { selectedSidebarItem, children, pathname, isCompact } = this.props;
    const { isMenuVisible } = this.state;

    const sidebarBaseStyle = {
      backgroundColor: SIDEBAR_BACKGROUND_COLOR,
      height: '100vh',
      left: 0,
      overflowX: 'hidden',
      overflowY: 'auto',
      position: 'fixed',
      transition: 'all 0.15s ease',
      zIndex: 2,
    };

    const sidebarCompactStyle = {
      marginLeft: isMenuVisible ? 'inherit' : '-250px',
    };

    const bodyStyle = {
      boxSizing: 'border-box',
      flexDirection: 'column',
      display: 'flex',
      minHeight: '100vh',
    };

    const contentMargin = (isCompact && !isMenuVisible) ? '50px' : SIDEBAR_WIDTH;

    return (
      <div>
        <div
          style={{
            ...sidebarBaseStyle,
            ...isCompact && sidebarCompactStyle,
          }}
        >
          {isCompact && (
            <Spacing top right left>
              <Button
                text="Collapse"
                onClick={this.setMenuVisibility(false)}
                style={{ width: '100%' }}
                secondary
              />
            </Spacing>
          )}

          <Sidebar selected={selectedSidebarItem} />
        </div>

        {isCompact && (
          <a href="#" onClick={this.setMenuVisibility(true)}>
            <Spacing style={{ position: 'fixed' }} top left>
              <Menu
                style={{
                  color: colors.gray20,
                  cursor: 'pointer',
                  fontSize: sizes.epsilon,
                }}
              />
            </Spacing>
          </a>
        )}

        <div style={{ marginLeft: contentMargin, transition: 'all 0.15s ease' }}>
          <Spacing size="huge" left right padding>
            <Spacing style={bodyStyle} top padding>
              <Spacing size="large" bottom>
                <Header pathname={pathname} isCompact={isCompact} />
              </Spacing>

              <Spacing style={{ flexGrow: 1 }} size="large" bottom>
                {children}
              </Spacing>

              <Footer />
            </Spacing>
          </Spacing>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ context }) => ({
  isCompact: context.isCompact,
});

export default connect(mapStateToProps)(LayoutContainer);

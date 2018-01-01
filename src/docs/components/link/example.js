import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Spacing, Text, colors } from 'react-elemental';
import { withRouter } from 'react-router';

class LinkExample extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleHomeNavigation = (evt) => {
    evt.preventDefault();

    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <Spacing bottom>
          <Text color={colors.primary}>
            <Link href="" activeColor={colors.black}>
              Links will inherit whatever color is used in the parent Text element
            </Link>
          </Text>
        </Spacing>

        <Spacing bottom>
          <Text color={colors.primary}>
            <Link type="plain" href="" activeColor={colors.black}>
              Use plain links to disable the underline on hover
            </Link>
          </Text>
        </Spacing>

        <Spacing bottom>
          <Text color={colors.primary}>
            <Link type="underline" href="" activeColor={colors.black}>
              Use underline links to always show the underline
            </Link>
          </Text>
        </Spacing>

        <Spacing bottom>
          <Text color={colors.primary}>
            <Link href="/" activeColor={colors.black} onClick={this.handleHomeNavigation}>
              This link hooks into react-router and will navigate to the root path
            </Link>
          </Text>
        </Spacing>
      </div>
    );
  }
}

export default withRouter(LinkExample);

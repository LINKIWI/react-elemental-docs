import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spacing, Tabs, Text } from 'react-elemental';

const SecondaryTabOption = ({ children }) => (
  <Spacing size="small" left right>
    <Spacing size="tiny" top bottom>
      <Text>
        {children}
      </Text>
    </Spacing>
  </Spacing>
);

SecondaryTabOption.propTypes = {
  children: PropTypes.node.isRequired,
};

export default class TabsExample extends Component {
  state = { value: null };

  handleChange = (value) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <div>
        <Spacing size="small" bottom>
          <Text>
            {`The currently selected tab is: ${value || '(none yet)'}`}
          </Text>
        </Spacing>

        <Spacing bottom>
          <Tabs
            options={[
              { value: 'one', label: 'one' },
              { value: 'two', label: 'two' },
              { value: 'three', label: 'three' },
            ]}
            value={value}
            onChange={this.handleChange}
          />
        </Spacing>

        <Spacing size="small" bottom>
          <Text>
            The secondary tab style is better suited for contexts where the tabs do not occupy the
            full page width.
          </Text>
        </Spacing>

        <Spacing size="small" bottom>
          <Tabs
            options={[
              { value: 'one', label: <SecondaryTabOption>one</SecondaryTabOption> },
              { value: 'two', label: <SecondaryTabOption>two</SecondaryTabOption> },
              { value: 'three', label: <SecondaryTabOption>three</SecondaryTabOption> },
            ]}
            value={value}
            onChange={this.handleChange}
            secondary
            fit
          />
        </Spacing>
      </div>
    );
  }
}

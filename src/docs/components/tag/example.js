import React, { Component } from 'react';
import { colors, Spacing, Tag, Text } from 'react-elemental';

const TAGS = [
  'color',
  'terminal',
  'console',
  'cli',
  'ansi',
  'style',
  'tty',
  'shell',
  'xterm',
];

export default class TagExample extends Component {
  constructor(props) {
    super(props);

    this.state = TAGS.reduce((acc, val) => Object.assign({}, acc, { [val]: true }), {});
  }

  handleDismiss = (key) => () => this.setState({ [key]: false });

  render() {
    return (
      <div>
        <Spacing bottom>
          <Spacing size="small" bottom>
            <Text size="kilo" color="gray60" uppercase bold>
              Edit keywords
            </Text>
          </Spacing>

          {TAGS.filter((tag) => this.state[tag]).map((tag) => (
            <Spacing
              key={tag}
              size="tiny"
              style={{ display: 'inline-block' }}
              right
              bottom
            >
              <Tag
                text={tag}
                onDismiss={this.handleDismiss(tag)}
                dismissible
              />
            </Spacing>
          ))}
        </Spacing>

        <Spacing bottom>
          <Spacing size="small" bottom>
            <Text size="kilo" color="gray60" uppercase bold>
              Publish status
            </Text>
          </Spacing>

          <Tag
            outlineColor={colors.green}
            backgroundColor={colors.greenLight}
            text="Success"
          />
        </Spacing>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { colors, Button, Spacing } from 'react-elemental';

export default class ButtonExample extends Component {
  state = {
    buttonColor: colors.orange,
  };

  componentDidMount() {
    this.interval = setInterval(this.toggleColor, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick = () => alert('You clicked a button');  // eslint-disable-line no-alert

  toggleColor = () => this.setState(({ buttonColor }) => ({
    buttonColor: buttonColor === colors.orange ? colors.green : colors.orange,
  }));

  render() {
    const { buttonColor } = this.state;

    return (
      <div>
        <Spacing bottom>
          <Button
            size="alpha"
            text="Click me"
            onClick={this.handleClick}
          />
        </Spacing>

        <Spacing bottom>
          <Button
            size="beta"
            text="Click me"
            onClick={this.handleClick}
          />
        </Spacing>

        <Spacing bottom>
          <Button
            size="gamma"
            text="Click me"
            onClick={this.handleClick}
          />
        </Spacing>

        <Spacing bottom>
          <Button
            color={colors.purple}
            text="Purple button!"
            onClick={this.handleClick}
          />
        </Spacing>

        <Spacing bottom>
          <Button
            color={buttonColor}
            text="Color changing button"
            onClick={this.handleClick}
          />
        </Spacing>

        <Spacing bottom>
          <Button
            text="I'm a disabled button"
            onClick={this.handleClick}
            disabled
          />
        </Spacing>

        <Spacing bottom>
          <Button
            text="Secondary"
            onClick={this.handleClick}
            secondary
          />
        </Spacing>

        <Spacing bottom>
          <Button
            color={colors.green}
            text="Colors!"
            onClick={this.handleClick}
            secondary
          />
        </Spacing>
      </div>
    );
  }
}

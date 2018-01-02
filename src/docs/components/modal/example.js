import React, { Component } from 'react';
import { Button, Label, Modal, Spacing, Text } from 'react-elemental';

const ModalContents = () => (
  <Spacing size="large" top right bottom left padding>
    <Spacing bottom>
      <Text size="delta" color="primary" bold>
        Modal title
      </Text>
      <Text size="epsilon" color="gray50">
        Some subtitle goes here
      </Text>
    </Spacing>

    <Spacing bottom>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum ex eu ante
        tempor, nec bibendum ipsum egestas. Integer feugiat id metus et vehicula. Duis in blandit
        augue. Sed eu lobortis neque. Integer iaculis leo in dolor sodales, non bibendum turpis
        iaculis. Nunc elementum maximus orci, quis sagittis ligula ullamcorper ultricies.
      </Text>
    </Spacing>

    <Text right>
      <Button text="Some button here" />
    </Text>
  </Spacing>
);

export default class ModalExample extends Component {
  state = {
    isVisible: {
      alpha: false,
      beta: false,
      gamma: false,
      persistent: false,
    },
  };

  setVisibility = (size, isVisible) => () => this.setState((prevState) => ({
    isVisible: {
      ...prevState.isVisible,
      [size]: isVisible,
    },
  }));

  render() {
    const { isVisible: { alpha, beta, gamma, persistent } } = this.state;

    return (
      <div>
        <Spacing bottom>
          {alpha && (
            <Modal
              size="alpha"
              onHide={this.setVisibility('alpha', false)}
            >
              {<ModalContents />}
            </Modal>
          )}
          <Label label="Alpha-sized modal" />
          <Button
            text="Show modal"
            onClick={this.setVisibility('alpha', true)}
          />
        </Spacing>

        <Spacing bottom>
          {beta && (
            <Modal
              size="beta"
              onHide={this.setVisibility('beta', false)}
            >
              {<ModalContents />}
            </Modal>
          )}
          <Label label="Beta-sized modal" />
          <Button
            text="Show modal"
            onClick={this.setVisibility('beta', true)}
          />
        </Spacing>

        <Spacing bottom>
          {gamma && (
            <Modal
              size="gamma"
              onHide={this.setVisibility('gamma', false)}
            >
              {<ModalContents />}
            </Modal>
          )}
          <Label label="Gamma-sized modal" />
          <Button
            text="Show modal"
            onClick={this.setVisibility('gamma', true)}
          />
        </Spacing>

        <Spacing bottom>
          {persistent && (
            <Modal persistent>
              {<ModalContents />}
            </Modal>
          )}
          <Label label="Persistent modal" />
          <Button
            text="Show modal"
            onClick={this.setVisibility('persistent', true)}
          />
        </Spacing>
      </div>
    );
  }
}

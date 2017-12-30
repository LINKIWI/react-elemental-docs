import React from 'react';
import { shallow } from 'enzyme';
import Component from 'app/react/components/component';
import Container from 'app/react/containers/container';

describe('[Container] Container', () => {
  test('Basic rendering', () => {
    const root = shallow(
      <Container />,
    );

    expect(root.find(Component).length).toBe(1);
  });
});

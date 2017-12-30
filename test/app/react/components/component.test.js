import React from 'react';
import { shallow } from 'enzyme';
import Component from 'app/react/components/component';

describe('[Component] Component', () => {
  test('Basic rendering', () => {
    const root = shallow(
      <Component />,
    );

    expect(root.text()).toBe('root component');
  });
});

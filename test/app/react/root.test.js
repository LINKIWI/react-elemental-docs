import React from 'react';
import { shallow } from 'enzyme';
import { Root } from 'app/react/root';

describe('Root', () => {
  test('Reacts to window resize event', () => {
    const handleWindowDimensionsChange = jest.fn();
    const root = shallow(
      <Root
        handleWindowDimensionsChange={handleWindowDimensionsChange}
      />,
    );

    expect(handleWindowDimensionsChange).toBeCalled();

    root.unmount();
  });
});

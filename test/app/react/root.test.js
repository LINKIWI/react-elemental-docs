import React from 'react';
import { Helmet } from 'react-helmet';
import { shallow } from 'enzyme';
import { Root } from 'app/react/root';

describe('Root', () => {
  test('Includes helmet properties', () => {
    const handleWindowDimensionsChange = jest.fn();
    const root = shallow(
      <Root
        handleWindowDimensionsChange={handleWindowDimensionsChange}
      />,
    );

    expect(handleWindowDimensionsChange).toBeCalled();
    expect(root.find(Helmet).length).toBe(1);
  });
});

import React from 'react';
import { Helmet } from 'react-helmet';
import Component from 'app/react/components/component';

const Container = () => (
  <div>
    <Helmet>
      <title>Root</title>
    </Helmet>

    <Component />
  </div>
);

export default Container;

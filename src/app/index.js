import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { bootstrap } from 'react-elemental';
import karlaBold from 'react-elemental-fonts/karla-bold';
import karlaRegular from 'react-elemental-fonts/karla-regular';
import sourceCodeProMedium from 'react-elemental-fonts/source-code-pro-medium';
import sourceCodeProRegular from 'react-elemental-fonts/source-code-pro-regular';
import { createBrowserHistory } from 'history';
import Root from 'app/react/root';
import store from 'app/redux/store';

export default class App extends Component {
  constructor(props) {
    super(props);

    bootstrap({
      primary: {
        regular: karlaRegular,
        bold: karlaBold,
      },
      secondary: {
        regular: sourceCodeProRegular,
        bold: sourceCodeProMedium,
      },
    });

    this.history = createBrowserHistory();
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={this.history}>
          <Root />
        </Router>
      </Provider>
    );
  }
}

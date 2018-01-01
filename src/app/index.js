import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { bootstrap } from 'react-elemental';
import karlaBold from 'react-elemental-fonts/karla-bold';
import karlaRegular from 'react-elemental-fonts/karla-regular';
import sourceCodeProMedium from 'react-elemental-fonts/source-code-pro-medium';
import sourceCodeProRegular from 'react-elemental-fonts/source-code-pro-regular';
import { registerLanguage } from 'react-syntax-highlighter/prism-light';
import bash from 'react-syntax-highlighter/languages/prism/bash';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import Raven from 'raven-js';
import PiwikReactRouter from 'piwik-react-router';
import { createBrowserHistory } from 'history';
import RootContainer from 'app/react/root';
import store from 'app/redux/store';

const {
  NODE_ENV,
  ROUTING_BASE_PATH = '/',
  CLIENT_SENTRY_DSN,
  PIWIK_URL,
  PIWIK_SITE_ID,
  PIWIK_CLIENT_TRACKER_NAME = 'piwik.js',
  PIWIK_SERVER_TRACKER_NAME = 'piwik.php',
} = process.env;

const isProd = NODE_ENV === 'production';

export default class App extends Component {
  constructor(props) {
    super(props);

    // react-elemental initialization
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

    // react-syntax-highlighter initialization
    registerLanguage('bash', bash);
    registerLanguage('jsx', jsx);

    // Sentry initialization
    if (isProd && CLIENT_SENTRY_DSN) {
      Raven.config(CLIENT_SENTRY_DSN).install();
    }

    // Piwik and react-router initialization
    const piwik = PIWIK_URL && PiwikReactRouter({
      url: PIWIK_URL,
      siteId: PIWIK_SITE_ID,
      clientTrackerName: PIWIK_CLIENT_TRACKER_NAME,
      serverTrackerName: PIWIK_SERVER_TRACKER_NAME,
    });
    const browserHistory = createBrowserHistory({ basename: ROUTING_BASE_PATH });
    this.history = (piwik && isProd) ? piwik.connectToHistory(browserHistory) : browserHistory;
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={this.history}>
          <RootContainer />
        </Router>
      </Provider>
    );
  }
}

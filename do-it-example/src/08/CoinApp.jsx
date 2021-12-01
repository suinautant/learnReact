import React, { PureComponent } from 'react';
import AppLayout from './components/AppLayout';
// import CoinOverview from './components/main/CoinOverview';
import MainPage from './components/main/MainPage';

class CoinApp extends PureComponent {
  render() {
    return (
      <AppLayout>
        <MainPage />
      </AppLayout>
    );
  }
}

export default CoinApp;

import React from 'react';
import Screen from './src/Screen';
import {Platform, UIManager} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/Redux/Store';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Screen />
      </PersistGate>
    </Provider>
  );
};

export default App;

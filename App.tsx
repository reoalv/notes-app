import React from 'react';
import Screen from './src/Screen';
import {Platform, SafeAreaView, UIManager} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/Redux/Store';
import Colors from './src/Utils/Color';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView
          style={{flex: 1, backgroundColor: Colors.brandColor.softGreen}}>
          <Screen />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;

import React from 'react';
import AppRouter from './src/navigation/AppRouter.tsx';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;

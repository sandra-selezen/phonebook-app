import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ChakraProvider, Spinner } from '@chakra-ui/react';

import { store, persistor } from './redux/store.js';
import { theme } from './utils/extendTheme.js';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <BrowserRouter basename='/'>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
    </ChakraProvider>
  </StrictMode>,
);

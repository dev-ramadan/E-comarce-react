

import { createRoot } from 'react-dom/client';
import './index.css';
import App from '../src/App';
import { Provider } from 'react-redux';
import store from './App/Store/Store';

    createRoot( document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);

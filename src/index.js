import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import {store , persistor} from "./redux/store"
import YouBase from './base/main'
//持久化redux 数据
import {PersistGate} from 'redux-persist/integration/react';
const pages=require.context('./pages', true, /.router.js$/)
window.store=store;
const routes= YouBase.getRoute(pages);
ReactDOM.render(
    <Provider   store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App routes={routes} />
      </PersistGate>
        
    </Provider>
, document.getElementById('root'));


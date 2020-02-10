import  { createStore,applyMiddleware } from "redux"
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
//持久化redux 数据
import {persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const myReducer = persistReducer({
    key: 'root',
    storage
}, rootReducer);

export const store = createStore(myReducer,applyMiddleware(thunk));
export const persistor = persistStore(store);
// export default () => {
   
//     const persistor = persistStore(store);

//     return { store, persistor }
//   }
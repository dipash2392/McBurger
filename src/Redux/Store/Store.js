import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from '../root-reducer';
import storage from 'redux-persist/lib/storage';
const middleware = [logger];
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
export default () => {
    const store = createStore(persistedReducer, applyMiddleware(...middleware));
    let persistorStore = persistStore(store);
    return {
        store, persistorStore 
    }
}
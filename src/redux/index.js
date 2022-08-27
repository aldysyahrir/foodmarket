import { combineReducers, createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

/** 
 * REDUCER
*/

import user from "./users/reducer";

const reducers = combineReducers({ user });

/**
 * REDUX PERSIST
 */

const persistConfig = {
    key: "authType",
    storage,
    whiteList: ["user"]
}

const persistWithReducer = persistReducer(persistConfig, reducers)

/**
 * STORE
 */

const store =
    createStore(persistWithReducer,
        composeWithDevTools(applyMiddleware(thunk)))

const persistor = persistStore(store);

export { persistor, store };
import { combineReducers, createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

/** 
 * REDUCER
*/

import global from "./global/reducer";
import user from "./users/reducer";

const reducers = combineReducers({ user, global });

/**
 * REDUX PERSIST
 */

const persistConfig = {
    key: "authType",
    storage,
    whitelist: ["user"]
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

export * from "./actionType";

/**
 * ACTION
 */
export * from "./global/action";
export * from "./users/action";

/**
 * SELECTORS
 */

export * from "./global/selectors";
export * from "./users/selectors";
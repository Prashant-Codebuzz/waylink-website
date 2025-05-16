import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import localStorage from "redux-persist/es/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/userAuthSlice"

const getConfig = (key, whitelist) => {
    const persistConfig = {
        key: key,
        storage: localStorage,
        whitelist
    };
    return persistConfig;
}

const reducer = combineReducers({
    userAuth: persistReducer(getConfig("userAuth", ["userAuth"]), authReducer),
})

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export const persistor = persistStore(store);

export default store;
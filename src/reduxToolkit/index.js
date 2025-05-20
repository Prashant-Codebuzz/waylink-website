import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import localStorage from "redux-persist/es/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import allAgentReducer from "../reduxToolkit/slice/user/default/agentListSlice"

// User-Slice
import userAuthReducer from "./slice/user/auth/userAuthSlice";

// Agent-Slice


const getConfig = (key, whitelist) => {
    const persistConfig = {
        key: key,
        storage: localStorage,
        whitelist
    };
    return persistConfig;
}

const reducer = combineReducers({
    // User
    userAuth: persistReducer(getConfig("userAuth", ["userAuth"]), userAuthReducer),
    allAgent: allAgentReducer
    // Agent

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
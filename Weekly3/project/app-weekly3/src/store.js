import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/dataSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "data",
  storage,
};

const rootReducer = combineReducers({
  data: dataReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

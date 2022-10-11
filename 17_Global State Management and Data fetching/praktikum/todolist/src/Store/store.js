import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import TaskSlice from "../Features/TaskSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: ShadowRoot,
  storage,
};

const reducers = combineReducers({
  tasklist: TaskSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

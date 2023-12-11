import { configureStore } from "@reduxjs/toolkit";

import tokenSlice from "../views/tokenSlice";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import thunk from "redux-thunk";
const reducers = combineReducers({
  token: tokenSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});

///////////////////////////////////////////////////////////////////
//el del estudio de tatus que si funcionaba

// import { configureStore } from '@reduxjs/toolkit';
// import userSlice from '../pages/userSlice';
// import searchSlice from '../pages/searchSlice';

// import { combineReducers } from 'redux';

// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';

// import thunk from 'redux-thunk';

// const reducers = combineReducers({
//     user: userSlice,
//     search: searchSlice
// })

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, reducers);

// export default configureStore({
//     reducer: persistedReducer,
//     middleware: [thunk]
// });

///////////////////////////////////////////////////////////////////
//teinda minima, funciona pero no guarda el token

// import { configureStore } from '@reduxjs/toolkit';
//import tokenReducer from '../views/tokenSlice';

//export default configureStore({
//  reducer: {
//    token: tokenReducer,
//  },
// });

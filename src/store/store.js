import { configureStore } from "@reduxjs/toolkit";
import testsReducer from './questions/questions-slice';

export const store = configureStore({
   reducer: {
      tests: testsReducer
   }
})

window.__store = store; 
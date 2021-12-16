import { configureStore } from "@reduxjs/toolkit";
import testsReducer from './questions/questions-slice';
import createdTestsReducer from './questions/admin-slice';


export const store = configureStore({
   reducer: {
      tests: testsReducer,
      createdTests: createdTestsReducer
   }
})

window.__store = store; 
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const Axios = axios.create({
   baseURL: "https://opentdb.com/api.php",
});

const initialState = {
   isDataFetched: false,
   tests: [],
   currentTest: {
      answers: [],
   },
   toggleTest: 0,
   isTestsDone: false,
   score: 0,
   testsAmount: 0,
};

export const fetchAsyncTests = createAsyncThunk(
   "tests/fetchAsyncTests",
   async () => {
      const data = await Axios.get("?amount=7");
      return data.data.results.map((item) => ({
         ...item,
         selectedAnswer: null,
         answers: [item.correct_answer, ...item.incorrect_answers],
         id: Math.floor(Math.random() * 100000),
      }));
   }
);

const testsSlice = createSlice({
   name: "tests",
   initialState: initialState,
   reducers: {
      addTests: (state, { payload }) => {
         state.tests = payload;
      },
      nextTest: (state, { payload }) => {
         if (state.toggleTest + 1 !== state.tests.length) {
            state.toggleTest += 1;
            state.currentTest = state.tests[state.toggleTest];
         }
      },
      prevTest: (state, { payload }) => {
         if (state.toggleTest !== 0) {
            state.toggleTest = state.toggleTest - 1;
            state.currentTest = state.tests[state.toggleTest];
         }
      },
      optionSelect: (state, { payload }) => {
         state.tests.forEach(
            (test) =>
               test.id === payload.id && (test.selectedAnswer = payload.option)
         );
         state.currentTest = state.tests[state.toggleTest];
      },
      changeTestNumber: (state, { payload }) => {
         state.currentTest = state.tests[payload];
         state.toggleTest = payload;
      },
      endTests: (state, { payload }) => {
         state.isTestsDone = true;
         state.toggleTest = 0;
         state.currentTest = state.tests[state.toggleTest];
         state.tests.forEach((test) => {
            if (test.correct_answer === test.selectedAnswer) {
               test.isTrueAnswered = true;
               state.score++;
            }
            else if (test.selectedAnswer === null) test.isTrueAnswered = null;
            else test.isTrueAnswered = false;
         });
      },
   },
   extraReducers: {
      [fetchAsyncTests.pending]: () => {
         console.log("pending");
      },
      [fetchAsyncTests.fulfilled]: (state, { payload }) => {
         return {
            ...state,
            tests: payload,
            currentTest: payload[0],
            isDataFetched: true,
            testsAmount: payload.length,
         };
      },
   },
});

// ? action(s)
export const {
   addTests,
   nextTest,
   prevTest,
   optionSelect,
   changeTestNumber,
   endTests,
} = testsSlice.actions;
// ? selectors(s)
export const getTests = (state) => state.tests;
// ? reducer(s)
export default testsSlice.reducer;

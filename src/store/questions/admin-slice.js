import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   createdTests: [],
   currentCreatingTest: {},
   currentTest: {
      answers: [],
      correct_answer: "",
   },
};

const createdTestsSlice = createSlice({
   name: "createdTests",
   initialState: initialState,
   reducers: {
      saveCreatedTest: (state, { payload }) => {
         const test = {
            question: "",
            correct_answer: "",
            incorrect_answers: [],
         };
         let trueAnswerIndex = null;
         test.question = payload.question;
         for (let key in payload) {
            if (payload[key] === true) {
               trueAnswerIndex = key.split("_")[2];
            }
         }
         for (let key in payload) {
            if (key.split("_")[0] === "option" && key.split("_")[1] === trueAnswerIndex) {
               test.correct_answer = payload[key];
            } else if(key.split("_")[0] === "option") {
               test.incorrect_answers.push(payload[key]);
            }
         }
         state.createdTests.push(test);
         console.log(test);
      },
   },
});
export const { saveCreatedTest } = createdTestsSlice.actions;
export const getCreatedTests = (state) => state.createdTests;
export default createdTestsSlice.reducer;
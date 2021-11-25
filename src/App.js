import React, { useEffect, useState } from "react";

import { getTests } from "./apis/api";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import QuestionPanel from "./components/QuestionPanel/QuestionPanel";
import ResultsPanel from "./components/ResultsPanel/ResultsPanel";

import "./styles/GlobalStyle.css";
import styled from "styled-components";

function App() {
   const [tests, setTests] = useState([]);
   const [doneTests, setDoneTests] = useState([]);
   useEffect(() => {
      getTests().then((data) => {
         console.log("DATA IS COME!");
         // if (localStorage.getItem("tests")) {
            // setTests(JSON.parse(localStorage.getItem("tests")));
         setTests(data);
      });
   }, []);
   const handleEndTest = (modifiedTests) => {
      setDoneTests(modifiedTests);
   };

   return (
      <BrowserRouter>
         <Routes>
            <Route
               exact
               path="/"
               element={
                  tests.length ? (
                     <QuestionPanel
                        tests={tests}
                        handleEndTest={handleEndTest}
                     />
                  ) : (
                     <Loading>
                        <p>Loading...</p>
                     </Loading>
                  )
               }
            />
            <Route
               path="/results"
               element={<ResultsPanel doneTests={doneTests} />}
            />
         </Routes>
      </BrowserRouter>
   );
}

export default App;

const Loading = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100vw;
   height: 100vh;
   p {
      font-size: 40px;
      font-weight: bold;
   }
`;

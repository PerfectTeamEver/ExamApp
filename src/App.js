import React, { useEffect, useState } from "react";
import QuestionPanel from "./components/QuestionPanel/QuestionPanel";
import { getTests } from "./apis/api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResultsPanel from "./components/pages/ResultsPanel";
function App() {
   const [tests, setTests] = useState([]);

   useEffect(() => {
      getTests().then((data) => {
         setTests(data);
         console.log("DATA IS COME!");
      });
   }, []);

   return (
      <BrowserRouter>
         <Routes>
            <Route
               exact
               path="/"
               element={
                  tests.length ? <QuestionPanel tests={tests} /> : "loading"
               }
            />{" "}
            <Route path="/results" element={<ResultsPanel tests={tests} />}/>
               
         </Routes>
      </BrowserRouter>
   );
}

export default App;

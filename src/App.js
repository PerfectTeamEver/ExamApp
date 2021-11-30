import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import QuestionPanel from "./components/QuestionPanel/QuestionPanel";
import ResultsPanel from "./components/ResultsPanel/ResultsPanel";
import { fetchAsyncTests, getTests } from "./store/questions/questions-slice";
import "./styles/GlobalStyle.css";
import { Loading } from "./App.style";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncTests());
  }, [dispatch]);
  const { isDataFetched } = useSelector(getTests);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            isDataFetched ? (
              <QuestionPanel />
            ) : (
              <Loading>
                <p>Loading...</p>
              </Loading>
            )
          }
        />
        <Route path="/results" element={<ResultsPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import QuestionPanel from "./components/QuestionPanel/QuestionPanel";
import { getTests } from "./apis/api";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResultsPanel from "./components/pages/ResultsPanel";
import "./styles/GlobalStyle.css";
import styled from "styled-components";

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
            tests.length ? (
              <QuestionPanel tests={tests} />
            ) : (
              <Loading>
                <p>Loading...</p>
              </Loading>
            )
          }
        />
        <Route path="/results" element={<ResultsPanel tests={tests} />} />
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

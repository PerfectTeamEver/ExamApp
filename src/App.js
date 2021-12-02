import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import QuestionPanel from "./components/QuestionPanel/QuestionPanel";
import ResultsPanel from "./components/ResultsPanel/ResultsPanel";
import { fetchAsyncTests, getTests } from "./store/questions/questions-slice";
import { Loading } from "./App.style";  
import "./styles/GlobalStyle.css";
import styled from "styled-components";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import CreatedTests from './components/AdminPanel/CreatedTests/CreatedTests';

function App() {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(fetchAsyncTests());
   }, [dispatch]);
   const { isDataFetched } = useSelector(getTests);
   return (
      <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<AdminPanel />} />
            <Route exact path="/createdTests" element={<CreatedTests />} />
            {/* <Route exact path="/" element={isDataFetched ? (<QuestionPanel />) : (<Loading><p>Loading...</p></Loading>)}/> */}
            {/* <Route path="/results" element={<ResultsPanel />} /> */}
         </Routes>
      </BrowserRouter>
   );
}

export default App;
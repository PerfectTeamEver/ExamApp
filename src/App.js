import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTests } from "./store/questions/questions-slice";
import Home from "./components/Home/Home";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import MyTests from "./components/AdminPanel/MyTests/MyTests";
import CreateTest from "./components/AdminPanel/CreateTest/CreateTest";
import QuestionPanel from "./components/QuestionPanel/QuestionPanel";
import ResultsPanel from './components/QuestionPanel/ResultsPanel/ResultsPanel';
import Start from "./components/QuestionPanel/StartTest/Start";
import { Loading } from "./App.style";
import "./styles/GlobalStyle.css";

function App() {
   const { isDataFetched } = useSelector(getTests);
   return (
      <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin/my-tests" element={<MyTests />} />
            <Route path="/admin/create-test" element={<CreateTest />} />

            <Route path="/exam" element={<Start />} />
            <Route path="/exam/quiz"element={isDataFetched?(<QuestionPanel/>):(<Loading><p>Loading...</p></Loading>)}/>
            <Route path="/exam/results" element={<ResultsPanel />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;

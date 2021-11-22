import React from "react";
import { Result, ResultBtn } from "./ResultStyle";
import { AiOutlineFileDone } from "react-icons/ai";

const ResultsPanel = ({ tests }) => {
  return (
    <Result>
      <p>
        You scored <span>{1}</span> out of {tests.length}
      </p>
      <ResultBtn>
        <AiOutlineFileDone /> Show results
      </ResultBtn>
    </Result>
  );
};

export default ResultsPanel;

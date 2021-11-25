import React, { useState } from "react";
import ResultsReview from "./ResultsReview";

import { ResultWrapper, ResultBtn } from "./ResultStyle";
import { AiOutlineFileDone } from "react-icons/ai";

const ResultsPanel = ({ doneTests }) => {
  const [clicked, setClicked] = useState(false);

  let score = 0;
  let tests = doneTests.map((test) => {
    if (test.correct_answer === test.selectedAnswer) {
      score++;
      return {
        ...test,
        isTrueAnswered: true,
      };
    }
    if (test.selectedAnswer === null)
      return {
        ...test,
        isTrueAnswered: null,
      };
    else {
      return {
        ...test,
        isTrueAnswered: false,
      };
    }
  });

  return (
    <ResultWrapper>
      {clicked ? (
        <ResultsReview tests={tests} score={score} />
      ) : (
        <>
          <p>
            You scored <span>{score}</span> out of {doneTests.length}
          </p>
          <ResultBtn onClick={() => setClicked(!clicked)}>
            <AiOutlineFileDone /> Show results
          </ResultBtn>
        </>
      )}
    </ResultWrapper>
  );
};

export default ResultsPanel;

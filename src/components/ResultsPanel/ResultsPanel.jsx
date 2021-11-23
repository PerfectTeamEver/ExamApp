import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import ResultsReview from "./ResultsReview";

import { ResultWrapper, ResultBtn } from "./ResultStyle";
import { AiOutlineFileDone } from "react-icons/ai";

const ResultsPanel = ({ doneTests }) => {
  const [clicked, setClicked] = useState(false);

  let score = 0;
  //  debugger;
  let tests = doneTests.map((test) => {
    if (test.correct_answer === test.selectedAnswer) {
      score++;
      return {
        ...test,
        isTrueAnswered: true,
      };
    } else {
      return {
        ...test,
        isTrueAnswered: false,
      };
    }
  });

  return (
    <ResultWrapper>
      {clicked ? (
        <ResultsReview tests={tests} />
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

import React, { useState } from "react";
import ResultsReview from "./ResultsReview";
import { ResultWrapper, ResultBtn } from "./ResultStyle";
import { AiOutlineFileDone } from "react-icons/ai";
import { useSelector } from "react-redux";
import { getTests } from "../../store/questions/questions-slice";

const ResultsPanel = () => {
   const [clicked, setClicked] = useState(false);
   const { score, testsAmount } = useSelector(getTests);
   return (
      <ResultWrapper>
         {clicked ? (
            <ResultsReview />
         ) : (
            <>
               <p>
                  You scored <span>{score}</span> out of {testsAmount}
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

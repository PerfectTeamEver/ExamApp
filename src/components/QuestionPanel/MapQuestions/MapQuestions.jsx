import React from "react";
import { Link } from "react-router-dom";
import {
   MapContainer,
   MapContent,
   TestNum,
   StopTest,
   Select,
} from "./MapStyle";
import { GoStop } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import {
   changeTestNumber,
   endTests,
   getTests,
} from "./../../../store/questions/questions-slice";

const MapQuestions = () => {
   const { tests, toggleTest } = useSelector(getTests);
   const dispatch = useDispatch();
   return (
      <MapContainer>
         <MapContent>
            {tests.map((test, index) => (
               <Select currentTest={toggleTest === index} key={test.id}>
                  <TestNum
                     onClick={() => dispatch(changeTestNumber(index))}
                     isAnswerSelected={test.selectedAnswer}
                  >
                     {index + 1}
                  </TestNum>
               </Select>
            ))}
         </MapContent>
         <Link to="/exam/results">
            <StopTest onClick={() => dispatch(endTests())}>
               <GoStop /> Stop the Test
            </StopTest>
         </Link>
      </MapContainer>
   );
};

export default MapQuestions;

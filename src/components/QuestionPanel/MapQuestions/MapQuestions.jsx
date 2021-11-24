import React from "react";
import { MapContent, TestNum } from "./MapStyle";

const MapQuestions = ({ handleMap, tests }) => {
debugger
   return (
      <MapContent>
         {tests.map((test, index) => (
            <TestNum
               onClick={() => handleMap(index)}
               isAnswerSelected={(test.selectedAnswer && true)}
            >
               {index + 1}
            </TestNum>
         ))}
      </MapContent>
   );
};

export default MapQuestions;
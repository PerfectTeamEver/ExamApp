import React from "react";
import { MapContainer, MapContent, TestNum } from "./MapResultStyle";

const MapResult = ({
  toggleTest,
  tests,
  handleMap,
  correct_awswer,
  selected_answer,
}) => {
  return (
    <MapContainer>
      <MapContent>
        {tests.map((test, index) => {
          return (
            <TestNum
              currentTest={toggleTest === index}
              isCorrect={selected_answer === correct_awswer}
              onClick={() => handleMap(index)}
            >
              {index + 1}
            </TestNum>
          );
        })}
      </MapContent>
    </MapContainer>
  );
};

export default MapResult;

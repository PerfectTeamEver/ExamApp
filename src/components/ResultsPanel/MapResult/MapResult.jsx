import React from "react";
import { MapContainer, MapContent, Select, TestNum } from "./MapResultStyle";

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
            <Select currentTest={toggleTest === index}>
              <TestNum
                currentTest={toggleTest === index}
                isCorrect={selected_answer === correct_awswer}
                onClick={() => handleMap(index)}
              >
                {index + 1}
              </TestNum>
            </Select>
          );
        })}
      </MapContent>
    </MapContainer>
  );
};

export default MapResult;

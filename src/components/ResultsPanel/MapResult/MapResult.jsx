import React from "react";
import { MapContainer, MapContent, Select, TestNum } from "./MapResultStyle";
const MapResult = ({ toggleTest, tests, handleMap }) => {
  return (
    <MapContainer>
      <MapContent>
        {tests.map((test, index) => {
          return (
            <Select currentTest={toggleTest === index}>
              <TestNum
                isCorrect={test.isTrueAnswered === true}
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

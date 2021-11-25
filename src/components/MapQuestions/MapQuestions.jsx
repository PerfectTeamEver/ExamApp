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

const MapQuestions = ({ handleMap, tests, toggleTest, handleEndTest }) => {
  debugger;
  return (
    <MapContainer>
      <MapContent>
        {tests.map((test, index) => (
          <Select currentTest={toggleTest === index}>
            <TestNum
              onClick={() => handleMap(index)}
              isAnswerSelected={test.selectedAnswer}
            >
              {index + 1}
            </TestNum>
          </Select>
        ))}
      </MapContent>
      <Link to="/results">
        <StopTest onClick={() => handleEndTest(tests)}>
          <GoStop /> Stop the Test
        </StopTest>
      </Link>
    </MapContainer>
  );
};

export default MapQuestions;

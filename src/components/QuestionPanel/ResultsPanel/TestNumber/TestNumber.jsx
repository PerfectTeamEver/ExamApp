import React from "react";
import { Wrapper } from "./TestNumber.style";
import { BsCheckLg } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

const TestNumber = ({ toggleTest, currentTest }) => {
  return (
    <Wrapper>
      {toggleTest + 1} - test:
      {currentTest.isTrueAnswered ? (
        <BsCheckLg style={{ color: "#32CD32" }} />
      ) : currentTest.isTrueAnswered === false ? (
        <FaTimes style={{ color: "red" }} />
      ) : (
        <h5>not selected</h5>
      )}
    </Wrapper>
  );
};

export default TestNumber;
